// proxy pattern lab 2

import { COLORS } from "../../../Utils/COLORS";

interface IDocument {
    displayContent(user: User): void;
}

class User {

    private name: string;
    private role: 'admin' | 'user';

    constructor(name: string, role: 'admin' | 'user') {
        this.name = name;
        this.role = role;
    }

    getName(): string {
        return this.name;
    }

    getRole(): string {
        return this.role;
    }
}

class SecretDocument implements IDocument {

    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    displayContent(user: User): void {
        console.log(`SecretDocument content: %c${this.content}`, COLORS.gray);        
    }

}

class ProxyDocumentLocal implements IDocument {

    private secretDocument: IDocument;

    constructor(document: IDocument) {
        this.secretDocument = document;
    }

    displayContent(user: User): void {
        if (user.getRole() === 'admin'){
            this.secretDocument.displayContent(user);
            return;
        }

        console.log(`no access for regular users - ${user.getName()}`);
        
    }
    
}

export class ProxyPatternLab2 {

    exec() {


        const secretDoc = new SecretDocument("this is the content");
        const proxyDoc = new ProxyDocumentLocal(secretDoc);

        const userLocal = new User("amparo", "user");
        const userAdmin = new User("jara", "admin");

        proxyDoc.displayContent(userLocal);
        proxyDoc.displayContent(userAdmin);

    }

}