import * as vscode from 'vscode';

export class Stock {

    private item: vscode.StatusBarItem;

    constructor() {
        this.item = vscode.window.createStatusBarItem();
        this.setText();
    }

    setText() {
        this.item.text = "hello world bilibili";
        this.item.show();
    }
}
