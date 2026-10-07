import type {PropsWithChildren, ReactNode} from "react";

interface cardProps  extends PropsWithChildren{
  title: string;
  footer? : ReactNode
}

export function Card({title, children, footer}: cardProps) {

  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  )
}

