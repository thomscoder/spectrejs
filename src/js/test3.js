class Spawner {
    constructor(ghostName) {
        this.ghostName = ghostName;
    }

    spawn() {
        return `${this.ghostName} got ghostified`;
    }
}