interface userCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function UserCard({name, price, isSpecial = false }: userCardProps) {
  return (
     <article>
      <h2>
        {name} {isSpecial && <span>⭐</span>}
      </h2>
      <p>{price}</p>
     </article>
  );
} 