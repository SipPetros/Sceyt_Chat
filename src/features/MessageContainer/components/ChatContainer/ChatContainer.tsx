/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { Message } from '../../../../store/types';
import { MessageContainerProps } from '../../types';
import MessageCont from '../MessageCont';

const DEFAULT_PAGE_SIZE = 20;

function MessageContainer({ pageSize = DEFAULT_PAGE_SIZE }: MessageContainerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages = useSelector((state: any) => state.messages);
  const totalPages = messages.length / 20;
  const [displayedMessages, setDisplayedMessages] = useState(messages.slice(-pageSize).reverse());
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(0);

  const rootRef = useRef(null);
  const observerTarget = useRef(null);

  useEffect(() => {
    const target = observerTarget.current;
    const observer = new IntersectionObserver(entries => {
      if (entries[0] && entries[0].isIntersecting) {
        if (pageNum !== pageNum + 1) {
          setPageNum(num => num + 1);
        }
      }
    }, {
      threshold: 0.1,
    });

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(target);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observerTarget.current]);

  const loadMore = useCallback(() => {
    // Simulate new data
    setTimeout(() => {
      const newMessages = messages.slice(-pageSize * (pageNum + 1), -pageSize * pageNum).reverse();
      setDisplayedMessages((prev: Message[]) => [...prev, ...newMessages]);
      setLoading(false);
    }, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  useEffect(() => {
    if (pageNum <= totalPages) {
      setTimeout(() => {
        loadMore();
      }, 500);
      setLoading(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  useEffect(() => {
    setDisplayedMessages(messages.slice(-pageSize).reverse());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <div
      ref={rootRef}
      style={{
        display: 'flex',
        height: '100%',
        padding: '24px',
        flexDirection: 'column-reverse',
        overflow: 'auto',
        overflowAnchor: 'none',
        position: 'sticky',
        boxSizing: 'border-box',
      }}
    >
      {displayedMessages.map((message: Message, index: number) => (
        <MessageCont
          key={`${message.id}_message_${index}`}
          message={message}
          isOwner={message.isOwner}
          isPreviousSameUser={displayedMessages[index + 1]?.isOwner === message.isOwner}
        />
      ))}
      <div ref={observerTarget} />
      {loading === true && <p>loading...</p>}
    </div>
  );
}

export default MessageContainer;
