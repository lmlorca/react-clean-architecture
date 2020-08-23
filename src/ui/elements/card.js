import React from "react";

export function Card({
  children,
  header,
  title,
  content,
  footer,
  ...restProps
}) {
  return (
    <div className="rounded overflow-hidden bg-white mb-6" {...restProps}>
      <div className="px-6 py-4">
        {header && (
          <>
            <div className="text-right">{header}</div>
            <hr className="mb-6" />
          </>
        )}
        <div className="font-bold text-xl mb-2 text-gray-600">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
        {footer && (
          <>
            <hr className="mb-6" />
            <div className="text-right">{footer}</div>
          </>
        )}
      </div>
    </div>
  );
}
