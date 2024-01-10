"use strict";
class Knight {
    move(start, end) {
        let current = start;
        const visited = new Set();
        const previous = {
            current: start,
            path: [],
        };
        const queue = [start];
        const result = [];
        while (queue.length) {
            current = queue.shift();
            previous.current = current;
            previous.path.push(current);
            if (!current)
                return;
            visited.add(current);
            if (current[0] === end[0] && current[1] === end[1]) {
                console.log(this.checkInVisit([3, 3], previous.path));
                if (this.checkValidMove(this.leftup(current)) &&
                    visited.has(this.leftup(current)))
                    result.push(this.leftup(current));
                if (this.checkValidMove(this.leftdown(current)) &&
                    visited.has(this.leftdown(current)))
                    result.push(this.leftdown(current));
                if (this.checkValidMove(this.rightup(current)) &&
                    visited.has(this.rightup(current)))
                    result.push(this.rightup(current));
                if (this.checkValidMove(this.rightdown(current)) &&
                    visited.has(this.rightdown(current)))
                    result.push(this.rightdown(current));
                if (this.checkValidMove(this.upleft(current)) &&
                    visited.has(this.upleft(current)))
                    result.push(this.upleft(current));
                if (this.checkValidMove(this.upright(current)) &&
                    visited.has(this.upright(current)))
                    result.push(this.upright(current));
                if (this.checkValidMove(this.downleft(current)) &&
                    visited.has(this.downleft(current)))
                    result.push(this.downleft(current));
                if (this.checkValidMove(this.downright(current)) &&
                    visited.has(this.downright(current)))
                    result.push(this.downright(current));
                return previous;
            }
            if (this.checkValidMove(this.leftup(current)))
                queue.push(this.leftup(current));
            if (this.checkValidMove(this.leftdown(current)))
                queue.push(this.leftdown(current));
            if (this.checkValidMove(this.rightup(current)))
                queue.push(this.rightup(current));
            if (this.checkValidMove(this.rightdown(current)))
                queue.push(this.rightdown(current));
            if (this.checkValidMove(this.upleft(current)))
                queue.push(this.upleft(current));
            if (this.checkValidMove(this.upright(current)))
                queue.push(this.upright(current));
            if (this.checkValidMove(this.downleft(current)))
                queue.push(this.downleft(current));
            if (this.checkValidMove(this.downright(current)))
                queue.push(this.downright(current));
        }
        return;
    }
    checkInVisit(arr, prev) {
        prev.forEach((entry) => {
            if (entry[0] === arr[0] && entry[1] === arr[1])
                return true;
            return false;
        });
    }
    checkValidMove(pos) {
        return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
    }
    leftup(pos) {
        const x = pos[0] - 2;
        const y = pos[1] + 1;
        return [x, y];
    }
    leftdown(pos) {
        const x = pos[0] - 2;
        const y = pos[1] - 1;
        return [x, y];
    }
    rightup(pos) {
        const x = pos[0] + 2;
        const y = pos[1] + 1;
        return [x, y];
    }
    rightdown(pos) {
        const x = pos[0] + 2;
        const y = pos[1] - 1;
        return [x, y];
    }
    upleft(pos) {
        const x = pos[0] - 1;
        const y = pos[1] + 2;
        return [x, y];
    }
    upright(pos) {
        const x = pos[0] + 1;
        const y = pos[1] + 2;
        return [x, y];
    }
    downleft(pos) {
        const x = pos[0] - 1;
        const y = pos[1] - 2;
        return [x, y];
    }
    downright(pos) {
        const x = pos[0] + 1;
        const y = pos[1] - 2;
        return [x, y];
    }
}
const myKnight = new Knight();
//console.log(myKnight.move([3, 3], [0, 0]));
myKnight.move([3, 3], [0, 0]);
//# sourceMappingURL=knight.js.map