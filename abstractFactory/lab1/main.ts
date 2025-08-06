interface Button {
    render(): void;
}

interface Checkbox {
    render(): void;
}

class WindowsButton implements Button {
    render(): void {
        console.log("Rendering a Windows button.");
    }
}

class MacOSButton implements Button {
    render(): void {
        console.log("Rendering a macOS button.");
    }
}

class WindowsCheckbox implements Checkbox {
    render(): void {
        console.log("Rendering a Windows checkbox.");
    }
}

class MacOSCheckbox implements Checkbox {
    render(): void {
        console.log("Rendering a macOS checkbox.");
    }
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }

    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

function clientCode(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.render();
}

function main() {
    const windowsFactory = new WindowsFactory();
    clientCode(windowsFactory);

    const macOSFactory = new MacOSFactory();
    clientCode(macOSFactory);
}

main();