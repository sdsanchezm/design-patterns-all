import { COLORS } from "../../../COLORS";

interface PlayerProps {
    name: string;
    score: number;
    level: number;
}

class Player {
    // using parameter properties here: (it's just less code)
    constructor(
        public readonly name: string,
        public readonly score: number,
        public readonly level: number
    ) { }

    // concise constructor with destructuring
    static create({ name, score, level }: PlayerProps): Player {
        return new Player(name, score, level);
    }

    copyWith(updates: Partial<PlayerProps>): Player {
        return new Player(
            updates.name ?? this.name,
            updates.score ?? this.score,
            updates.level ?? this.level
        );
    }

    // score utility method
    addScore(points: number): Player {
        return this.copyWith({ score: this.score + points });
    }

    levelUp(): Player {
        return this.copyWith({ level: this.level + 1 });
    }

    displayState(): void {
        console.log(`\n%cCurrent State:`, COLORS.yellow);
        console.log(`\n%cPlayer: ${this.name}`, COLORS.blue);
        console.log(`%cScore: ${this.score}`, COLORS.blue);
        console.log(`%cLevel: ${this.level}`, COLORS.blue);
    }

    // better display
    toString(): string {
        return `Player(${this.name}, score: ${this.score}, level: ${this.level})`;
    }
}

export class ImmutabilityPatternLab2 {

    exec() {
        console.log("Immutability - Lab 2");

        let player = Player.create({
            level: 1,
            name: 'Jamecho',
            score: 0,
        });

        console.log('Initial state:');
        player.displayState();

        // using chainable utility methods
        player = player
            .addScore(10)
            .levelUp();

        console.log('\nSecond state:');
        player.displayState();

        player = player.addScore(10);
        console.log('\nThird state:');
        player.displayState();

        player = player.addScore(20);
        console.log('\nFourth state:');
        player.displayState();

        player = player
            .addScore(0)
            .levelUp()
            .copyWith({ name: 'Jamecho Pro' });
        console.log('\nFourth state:');
        player.displayState();

    }
}