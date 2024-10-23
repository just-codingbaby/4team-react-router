function FlexRow({ children, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function FlexColumn({ children, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export const Flex = {
  Row: FlexRow,
  Column: FlexColumn,
};
