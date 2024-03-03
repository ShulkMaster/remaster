import { Label } from '@applaudo/react-clapp-ui';
import { CSSProperties, useMemo } from 'react';

export type TextProps = {
  children?: string;
  size?: number;
  spacing?: number;
};

export const Text = ({ size = 14, children = '', spacing = 15 }: TextProps) => {
  const css = useMemo<CSSProperties>(() => ({
    fontSize: size,
    paddingBottom: `${spacing}px`,
    paddingTop: `${spacing}px`,
  }), [size, spacing]);

  return <Label style={css}>{children}</Label>;
}
