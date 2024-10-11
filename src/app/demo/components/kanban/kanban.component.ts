import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-kanban-board',
    templateUrl: './kanban.component.html',
    styleUrls: ['./kanban.component.scss'],
    providers: [CommonModule, MessageService]
})
export class KanbanBoardComponent {

    @Input()
    columns: Array<any> = [];
    columnCounter = 1;
    deleteColumnDialog: boolean = false;
    deleteCardDialog: boolean = false;
    selectedColumn: any = null;
    selectedCard: any = null;
    addCardDialog: boolean = false;
    addColumnDialog: boolean = false;
    newCardName: string = '';
    newColumnName: string = '';


    constructor( private messageService: MessageService) {}
    // Adiciona nova coluna
    addColumn(): void {

        this.newColumnName = '';


        const columnName = this.newColumnName;
        if (columnName) {
            this.columns.push({
                id: 'column-' + this.columnCounter++,
                name: columnName,
                cards: []
            });
        }
    }

    saveColumn(columnName: string): void {
        this.columns.push({
            id: 'column-' + this.columnCounter++,
            name: columnName,
            cards: []
        });
        this.addColumnDialog = false;
    }

    // Remove coluna
    removeColumn(columnId: string): void {
        this.columns = this.columns.filter(column => column.id !== columnId);
    }

    // Adiciona um cartão a uma coluna
    addCard(column: any): void {
        const cardName = prompt('Digite o nome da tarefa:');
        if (cardName) {
            column.cards.push({
                id: 'card-' + new Date().getTime(),
                name: cardName
            });
        }
    }

    // Permite arrastar colunas
    dragStart(event: DragEvent, columnId: string): void {
        event.dataTransfer?.setData('text', columnId);
    }

    // Permite arrastar cartões
    dragCardStart(event: DragEvent, card: any, column: any): void {
        event.dataTransfer?.setData('card', JSON.stringify({ card, column }));
    }

    allowDrop(event: DragEvent): void {
        event.preventDefault();
    }

    dropCard(event: DragEvent, targetColumn: any): void {
        event.preventDefault();
        const data = event.dataTransfer?.getData('card');
        if (data) {
            const { card, column } = JSON.parse(data);
            const cardIndex = column.cards.indexOf(card);
            column.cards.splice(cardIndex, 1);
            targetColumn.cards.push(card);
        }
    }

    openNewCardDialog(column: any): void {
        this.selectedColumn = column;
        this.addCardDialog = true;
    }

    openNewColumnDialog(): void {

        this.newColumnName = '';
        this.addColumnDialog = true;

    }
}
