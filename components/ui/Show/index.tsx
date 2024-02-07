import React, { Fragment, ReactNode } from "react";

interface ShowProps {
  condition?: boolean;
  children: ReactNode | any;
}

interface ShowAdvancedProps {
  condition?: boolean;
  conditionTrue: ReactNode | any;
  conditionFalse?: ReactNode | any;
}

export const Show = ({
  condition,
  children,
}: ShowProps): React.JSX.Element | null => {
  if (condition) {
    return <Fragment>{children}</Fragment>;
  }
  return null;
};

export const ShowAdvanced = ({
  condition,
  conditionTrue,
  conditionFalse = null,
}: ShowAdvancedProps): React.JSX.Element | null => {
  if (condition) {
    return <Fragment>{conditionTrue}</Fragment>;
  } else {
    return conditionFalse ? <Fragment>{conditionFalse}</Fragment> : null;
  }
};
