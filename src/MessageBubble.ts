import P5 from 'p5';
import { PhysicalObject } from './PhysicalObject';

const hexToRGB = (hex:string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

export class MessageBubble extends PhysicalObject {
  public message: string;
  public demo: string;

  public size = {
    width: 0,
    height: 0,
  };

  private p: P5;

  constructor(p: P5, message: string, demo: string) {
    super();
    this.p = p;
    this.message = message;
    this.demo = demo;
    p.textFont('GMarketSansMedium', 18);
    const maxWidth = 200;
    this.size.width = Math.min(p.textWidth(this.message), maxWidth) + 40;
    this.size.height = Math.min(p.textWidth(this.message), maxWidth) + 40;
  }

  public draw(x = this.position.x, y = this.position.y) {
    const { p } = this;
    p.textFont('GMarketSansMedium', 18);
    const maxWidth = 200;
    // const height = p.textSize() + 100;
    const numOfLines = Math.ceil(p.textWidth(this.message) / maxWidth);

    p.fill(hexToRGB('#FFFFFF'));
    // p.stroke(hexToRGB('#0548CB'));
    p.ellipse(
      x,
      y,
      Math.min(p.textWidth(this.message), maxWidth) + 40,
      Math.min(p.textWidth(this.message), maxWidth) + 40,
    );
    p.fill(0);

    p.noStroke();
    p.textAlign(p.CENTER);
    p.text(
      this.message,
      x - Math.min(p.textWidth(this.message), maxWidth) / 2 - 5,

      y - (numOfLines * p.textSize()) / 2,

      Math.min(p.textWidth(this.message), maxWidth) + 5,

      (numOfLines * p.textSize()),
    );
  }

  public update() {
    super.update();
    const { p } = this;

    // bounding
    if (this.position.x - this.size.width / 2 < 0) {
      this.position.x = this.size.width / 2;
      this.velocity.x = -this.velocity.x;
    }
    if (this.position.x + this.size.width / 2 > p.windowWidth) {
      this.position.x = p.windowWidth - this.size.width / 2;
      this.velocity.x = -this.velocity.x;
    }
    if (this.position.y - this.size.height / 2 < 0) {
      this.position.y = this.size.height / 2;
      this.velocity.y = -this.velocity.y;
    }
    if (this.position.y + this.size.height / 2 > p.windowHeight) {
      this.position.y = p.windowHeight - this.size.height / 2;
      this.velocity.y = -this.velocity.y;
    }
  }

  public checkCollision(other: MessageBubble): {
    result: boolean,
    distance: number,
  } {
    const { p } = this;
    const d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
    const r1 = this.size.width / 2;
    const r2 = other.size.width / 2;
    if (d - 5 < r1 + r2) {
      return { result: true, distance: d };
    }
    return { result: false, distance: d };
  }
}
