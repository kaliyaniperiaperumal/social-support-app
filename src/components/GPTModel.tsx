"use client";

import { useEffect, useState } from "react";

type Props = {
  content: string;
  onAccept: (str: string) => void;
  onClose: () => void;
};

const GPTModal = ({ content, onAccept, onClose }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    setEditedContent(content);
    setIsEditing(false);
  }, [content]);

  const handleAccept = () => {
    onAccept(editedContent);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 bg-opacity-20 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h3 id="modal-title" className="text-lg font-bold mb-2">AI Suggestion</h3>
        {isEditing ? (
          <textarea
            className="w-full p-2 border rounded-md h-32 mb-4"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p className="mb-4 whitespace-pre-wrap">{editedContent}</p>
        )}
        <div className="flex gap-2">
          {!isEditing && (
            <button onClick={() => setIsEditing(true)} className="btn-secondary">
              Edit
            </button>
          )}
          <button onClick={handleAccept} className="btn-primary" autoFocus>Accept</button>
          <button onClick={onClose} className="btn-secondary">Close</button>
        </div>
      </div>
    </div>
  );
};

export default GPTModal;
