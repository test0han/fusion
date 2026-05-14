export default function ComparisonTable({ table }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-xs font-body">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-3 py-2 font-semibold text-foreground bg-muted/50 first:rounded-tl-lg last:rounded-tr-lg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-t border-border/50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2.5 text-muted-foreground ${j === 0 ? "font-medium text-foreground" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}