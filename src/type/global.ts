export interface QuestionProps {
  show: boolean;
  refresh: string;
}

export type TYPE_Q_FUN = ({ show, refresh }: QuestionProps) => JSX.Element;
