import * as React from "react";
import { Button } from "../../../style/emotion";

interface HeaderProps {
  style?: React.CSSProperties;
  items: string[][];
  onClick: (name: string) => void;
  handleAccout?: () => void;
  TweetButton?: any;
}

export default class HeaderMol extends React.Component<HeaderProps, {}> {
  render() {
    const { onClick, items } = this.props;
    return (
      <div>
        <div>
          {items.map(item => {
            const name = item[0];
            const dir = item[1];
            return (
              <Button
                key={name}
                onClick={() => {
                  onClick(dir);
                }}
              >
                {name}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}
