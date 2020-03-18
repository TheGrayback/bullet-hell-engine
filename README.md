An attempt to create an engine for bullet-hell shoot 'em up games in pure JavaScript

## Basic usage

Create a bullet manager

```javascript
let bm = new BulletManager(640, 480); // width, height
```

Inside your game loop you must call this method in each frame

```javascript
bm.update();
```

You have the following methods at your disposition for spawning bullets in different shapes. You can call them when you want, if the bullet manager is initialized. All the parameters are numbers (integer or float).

Note: speed is in pixels/frame, not pixels/second.

```javascript
// Spawns a single bullet
bm.addBullet(x, y, direction, speed);

// Spawns an arc of bullets. Spread is an angle (0-360)
bm.addArc(x, y, direction, speed, amount, spread);

// Spawns a circle of bullets
bm.addCircle(x, y, direction, speed, amount);

// Spawns a line. All bullets have the same direction but the speed of each bullet is stepped
bm.addLine(x, y, direction, minSpeed, maxSpeed, amount);

// Spawns multiple arcs. The speed of each arc is stepped
bm.addMultiArc(x, y, direction, minSpeed, maxSpeed, arcAmount, lineAmount, spread);

// Spawns multiple circles. The speed of each circle is stepped
bm.addMultiCircle(x, y, direction, minSpeed, maxSpeed, circleAmount, lineAmount);
```