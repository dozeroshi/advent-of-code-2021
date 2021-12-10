import { readFileSync } from 'fs';

const goGoSubmarine = () => {

    const plannedCourse = readFileSync('./day2-input-number-draws.txt', 'utf-8').split(/\n+/);

    interface SubState {
        horizontalPos: number;
        verticalPos: number;
        aimPos: number;
    }

    const horizontalPos = 0;
    const verticalPos = 0;
    const aimPos = 0;
    const Submarine: SubState = { horizontalPos, verticalPos, aimPos};

    plannedCourse.forEach((commandLine: string, index: number) => {
        const command: string[] = commandLine.split(/\s+/);

        if (command.length === 2) {
            const commandType = command[0];
            const commandNum: number = parseInt(command[1]);

            switch(commandType) {
                case 'forward':
                    Submarine.horizontalPos += commandNum;
                    Submarine.verticalPos += (Submarine.aimPos * commandNum);
                    break;
                case 'down':
                    Submarine.aimPos += commandNum;
                    break;
                case 'up':
                    Submarine.aimPos -= commandNum;
                    break;
            }
        }
    });

    return Submarine.horizontalPos * Submarine.verticalPos;

}
console.log(goGoSubmarine());
