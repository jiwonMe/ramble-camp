export class PhysicalObject {
  public position = {
    x: 0,
    y: 0,
  };
  public velocity = {
    x: 0,
    y: 0,
  };
  public acceleration = {
    x: 0,
    y: 0,
  };

  public setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  public setVelocity(x: number, y: number) {
    this.velocity.x = x;
    this.velocity.y = y;
  }

  public setAcceleration(x: number, y: number) {
    this.acceleration.x = x;
    this.acceleration.y = y;
  }

  public update() {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
