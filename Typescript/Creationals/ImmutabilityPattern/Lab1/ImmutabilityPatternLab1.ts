import { COLORS } from "../../../Utils/COLORS";

// STATE Management
// *  * Es útil para mantener un historial de estados en aplicaciones interactivas.

// 2 classes: State and History.
// State with ctor, copyWith() and displayState()
// History with save() undo() and redo()

class DocumentState {

    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(
        content: string,
        cursorPosition: number,
        unsavedchanges: boolean
    ) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedchanges;
    }

    copywith({ content, cursorPosition, unsavedChanges: unsavedchanges }: Partial<DocumentState>): DocumentState {
        return new DocumentState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedchanges ?? this.unsavedChanges
        );
    }

    displayState() {
        console.log('\n%cCurrent State:', COLORS.blue);
        console.log(`
        Content: ${this.content}
        cursorPosition: ${this.cursorPosition}
        unsavedChanges: ${this.unsavedChanges}
    `);
    }
}

class DocumentHistory {
    private history: DocumentState[] = [];
    private currentIndex: number = -1;

    save(state: DocumentState): void {
        // [] [] [] [] [x]
        // if currentIndex is always at the end, then its fine, but what if is moved?
        // [] [] [x] [] []
        // if it's moved, then all changes after currentIndex are gonna be lost and then
        // will push the new state/element at the end:
        // [] [] [] [] [] [x]
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.splice(0, this.currentIndex + 1);
        }

        this.history.push(state);
        this.currentIndex++;
    }

    undo(): DocumentState | null {

        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }

        return null;
    }

    redo(): DocumentState | null {

        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }

        return null;
    }

}

// different and most complete approach to save states
class DocumentHistory_Alternate {

    private history: DocumentState[] = [];
    private currentIndex: number = -1;

    save(state: DocumentState): void {
        // Remove future history if we're not at the end
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }

        this.history.push(state);
        this.currentIndex = this.history.length - 1;
    }

    undo(): DocumentState | null {
        if (this.canUndo()) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

    redo(): DocumentState | null {
        if (this.canRedo()) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }

    canUndo(): boolean {
        return this.currentIndex > 0;
    }

    canRedo(): boolean {
        return this.currentIndex < this.history.length - 1;
    }

    getCurrentState(): DocumentState | null {
        return this.history[this.currentIndex] ?? null;
    }

    clear(): void {
        this.history = [];
        this.currentIndex = -1;
    }

    getHistorySize(): number {
        return this.history.length;
    }

    getCurrentPosition(): number {
        return this.currentIndex;
    }
}



export class ImmutabilityPatternLab1 {

    exec() {
        console.log("Immutability =========");

        const history = new DocumentHistory();
        let documentState = new DocumentState("Title, content", 2, false);

        console.log('%cInitial State: ', COLORS.blue);
        documentState.displayState();

        documentState = documentState.copywith({
            content: "This is a document change",
            cursorPosition: 44,
            unsavedChanges: true
        });

        history.save(documentState);
        console.log('%cAfter First Change: ', COLORS.blue);
        documentState.displayState();

        documentState = documentState.copywith({ cursorPosition: 77 });
        history.save(documentState);
        console.log('%cAfter Second Change: ', COLORS.blue);
        documentState.displayState();

        documentState = history.undo()!;
        console.log('%cAfter undo: ', COLORS.blue);
        documentState.displayState();

        documentState = history.redo()!;
        console.log('%cAfter redo: ', COLORS.blue);
        documentState.displayState();

    }
}