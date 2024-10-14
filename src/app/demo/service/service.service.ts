import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Servico {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    disponibilidade: 'DISPONIVEL' | 'INDISPONIVEL';
    avaliacao: number; // De 0 a 5
    imagem: string; // URL da imagem do serviço
}

@Injectable()
export class ServicoService {
    constructor(private http: HttpClient) { }

    getServicos() {
        return this.http.get<any>('assets/demo/data/services.json')
            .toPromise()
            .then(res => res.data as Servico[])
            .then(data => data);
    }
}
