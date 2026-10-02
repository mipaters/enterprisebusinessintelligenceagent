import { useEffect, useRef, useState } from 'react';
import { useOperator } from '../data/OperatorContext';

function findAnswer(question, operator) {
  const normalized = question.toLowerCase();
  const match = operator.qaBank.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match ?? operator.defaultAnswer;
}

let messageId = 0;
function nextId() {
  messageId += 1;
  return messageId;
}

export default function ChatPanel({
  pendingQuestion,
  onConsumePendingQuestion,
  executiveId,
}) {
  const { operator } = useOperator();
  const suggestedPrompts =
    operator.executivePrompts?.[executiveId] ?? operator.feedPrompts;
  const [messages, setMessages] = useState([
    {
      id: nextId(),
      role: 'assistant',
      text: `Ask me about ${operator.name} metrics, opportunities, or business drivers. This demo uses synthetic data and operator-specific answer examples.`,
      sources: [],
    },
  ]);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState({});
  const scrollRef = useRef(null);

  const sendQuestion = (question) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const userMessage = { id: nextId(), role: 'user', text: trimmed };
    const { answer, sources } = findAnswer(trimmed, operator);
    const assistantMessage = {
      id: nextId(),
      role: 'assistant',
      text: answer,
      sources,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
  };

  useEffect(() => {
    if (pendingQuestion) {
      sendQuestion(pendingQuestion);
      onConsumePendingQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuestion]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuestion(input);
  };

  const rateMessage = (id, rating) => {
    setFeedback((prev) => ({ ...prev, [id]: rating }));
  };

  return (
    <section className="card chat-panel">
      <div className="section-header">
        <h2>Ask Executive Copilot</h2>
        <p className="muted">Conversational access to {operator.name} demo metrics and business context</p>
      </div>

      <div className="chat-messages" ref={scrollRef}>
        {messages.map((message) => (
          <div key={message.id} className={`chat-message chat-message-${message.role}`}>
            <p>{message.text}</p>
            {message.sources && message.sources.length > 0 && (
              <ul className="chat-sources">
                {message.sources.map((source) => (
                  <li key={source}>Source: {source}</li>
                ))}
              </ul>
            )}
            {message.role === 'assistant' && message.sources && (
              <div className="chat-feedback">
                <span>Was this helpful?</span>
                <button
                  type="button"
                  className={feedback[message.id] === 'up' ? 'feedback-btn active' : 'feedback-btn'}
                  onClick={() => rateMessage(message.id, 'up')}
                  aria-label="Helpful"
                >
                  👍
                </button>
                <button
                  type="button"
                  className={feedback[message.id] === 'down' ? 'feedback-btn active' : 'feedback-btn'}
                  onClick={() => rateMessage(message.id, 'down')}
                  aria-label="Not helpful"
                >
                  👎
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="chat-suggestions">
        {suggestedPrompts.map((prompt) => (
          <button key={prompt} type="button" className="suggestion-chip" onClick={() => sendQuestion(prompt)}>
            {prompt}
          </button>
        ))}
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask a follow-up question about performance or drivers..."
          aria-label="Ask a question"
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
