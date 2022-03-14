import P5 from 'p5';
import { MessageBubble } from './MessageBubble';

const hexToRGB = (hex:string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

const messages = [
  {
    type: 'response',
    message: '"산책할 공원이 없어요"',
    demo: '30대 남성 OO구민',
  },
  {
    type: 'response',
    message: '"안녕하세요"',
    demo: '20대 여성 OO구민',
  },
  {
    type: 'response',
    message: '"하나 둘 셋 넷 다섯 대한민국의 주권은 국민에게 있고 국민으로부터 나온다."',
    demo: '40대 남성 OO구민',
  },
  {
    type: 'response',
    message: '"산책할 공원이 없어요"',
    demo: '30대 남성 OO구민',
  },
  {
    type: 'response',
    message: '"안녕하세요"',
    demo: '20대 여성 OO구민',
  },
  {
    type: 'manifesto',
    message: '걷고 싶은 산책로를 만들겠습니다',
    demo: '이대호',
  },
  {
    type: 'response',
    message: '"하나 둘 셋 넷 다섯 대한민국의 주권은 국민에게 있고 국민으로부터 나온다."',
    demo: '40대 남성 OO구민',
  },
  {
    type: 'response',
    message: '"산책할 공원이 없어요"',
    demo: '30대 남성 OO구민',
  },
  {
    type: 'response',
    message: '"안녕하세요"',
    demo: '20대 여성 OO구민',
  },
  {
    type: 'response',
    message: '"하나 둘 셋 넷 다섯 대한민국의 주권은 국민에게 있고 국민으로부터 나온다."',
    demo: '40대 남성 OO구민',
  },
  {
    type: 'manifesto',
    message: '당신의 친구가 되어드립니다',
    demo: '이대호',
  },
  {
    type: 'response',
    message: '"산책할 공원이 없어요"',
    demo: '30대 남성 OO구민',
  },
  {
    type: 'response',
    message: '"안녕하세요"',
    demo: '20대 여성 OO구민',
  },
  {
    type: 'response',
    message: '"하나 둘 셋 넷 다섯 대한민국의 주권은 국민에게 있고 국민으로부터 나온다."',
    demo: '40대 남성 OO구민',
  },
];

const messageBubbles: MessageBubble[] = [];

export const sketch = (p:P5) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.style('visibility', 'visible');
    p.background(hexToRGB('#0548CB'));
    console.log('boom');
    p.noStroke();
    messages.forEach(msg => {
      const messageBubble = new MessageBubble(p, msg.message, msg.demo);
      // position randomly but no collision each other.
      messageBubbles.forEach(other => {
        while (messageBubble.checkCollision(other).result) {
          messageBubble.setPosition(p.random(p.width), p.random(p.height));
        }
      });
      messageBubble.setVelocity(Math.random() * 2 - 1, Math.random() * 2 - 1);
      messageBubbles.push(messageBubble);
    });
  };

  p.draw = () => {
    p.background(hexToRGB('#0548CB'));
    messageBubbles.forEach(messageBubble => {
      messageBubble.update();
      // messageBubbles.forEach(otherMessageBubble => {
      //   if (messageBubble !== otherMessageBubble) {
      //     if (messageBubble.checkCollision(otherMessageBubble).result) {
      //       const deltaX = messageBubble.position.x - otherMessageBubble.position.x;
      //       const deltaY = messageBubble.position.y - otherMessageBubble.position.y;
      //       const theta = Math.atan2(deltaY, deltaX);
      //       const v1 = messageBubble.velocity;
      //       const v2 = otherMessageBubble.velocity;

      //       // m1v1 + m2v2 = m1v2 + m2v2
      //       const newV1 = {
      //         x: v2.x,
      //         y: v2.y,
      //       };

      //       const newV2 = {
      //         x: v1.x,
      //         y: v1.y,
      //       };

      //       messageBubble.velocity = newV1;

      //       otherMessageBubble.velocity = newV2;
      //     }
      //   }
      // });
      messageBubble.draw();
    });
  };

  p.mouseWheel = (event: WheelEvent) => {
    console.log(event);
    // navigate

    if (event.deltaY > 0) {
      // up
    } else {
      // down
    }
  };
};

const drawMessageBubble = (p: P5, msg: string, x: number, y: number) => {
  p.textFont('GMarketSansMedium', 18);
  const width = p.textWidth(msg) + 20;
  const height = p.textWidth(msg) + 20;

  const maxWidth = 200;
  // const height = p.textSize() + 100;
  const numOfLines = Math.ceil(p.textWidth(msg) / maxWidth);

  p.fill(hexToRGB('#FFFFFF'));
  p.stroke(hexToRGB('#0548CB'));
  p.ellipse(x, y, Math.min(p.textWidth(msg), maxWidth) + 40, Math.min(p.textWidth(msg), maxWidth) + 40);
  p.fill(0);

  p.noStroke();
  p.textAlign(p.CENTER);
  p.text(
    msg,
    x - Math.min(p.textWidth(msg), maxWidth) / 2 - 5,

    y - (numOfLines * p.textSize()) / 2,

    Math.min(p.textWidth(msg), maxWidth) + 5,

    (numOfLines * p.textSize()),
  );
};
