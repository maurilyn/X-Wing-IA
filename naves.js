// Arquivo: naves.js
// Banco de Dados das Naves e Pilotos da IA

const xwingDials = {
    // ==========================================
    // IMPÉRIO GALÁCTICO
    // ==========================================
    "tie_interceptor_soontir": {
        nome: "TIE Interceptor (Soontir Fel)", 
        faccao: "Império Galáctico",
        cascoBase: 3, escudoBase: 0, piloto: "soontir_fel",
        acoes: ['foco', 'pirueta', 'impulso', 'desvio'],
        manobras: [
            { velocidade: 1, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 1, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 1, direcao: 'leve_dir', dificuldade: 'verde' },
            { velocidade: 2, direcao: 'fechada_esq', dificuldade: 'verde' }, { velocidade: 2, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 2, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 2, direcao: 'leve_dir', dificuldade: 'verde' }, { velocidade: 2, direcao: 'fechada_dir', dificuldade: 'verde' },
            { velocidade: 3, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 3, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'fechada_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'k_turn', dificuldade: 'vermelha' },
            { velocidade: 4, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 4, direcao: 'k_turn', dificuldade: 'vermelha' },
            { velocidade: 5, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 5, direcao: 'k_turn', dificuldade: 'vermelha' }
        ]
    },
    "tie_advanced_vader": {
        nome: "TIE Advanced x1 (Darth Vader)", 
        faccao: "Império Galáctico",
        cascoBase: 3, escudoBase: 2, piloto: "darth_vader",
        acoes: ['foco', 'mira', 'pirueta', 'desvio'],
        manobras: [
            { velocidade: 1, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 1, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 1, direcao: 'leve_dir', dificuldade: 'verde' },
            { velocidade: 2, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 2, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 2, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 2, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 2, direcao: 'fechada_dir', dificuldade: 'branca' },
            { velocidade: 3, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 3, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'fechada_dir', dificuldade: 'branca' },
            { velocidade: 4, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 4, direcao: 'k_turn', dificuldade: 'vermelha' }
        ]
    },
    "tie_fighter_generico": {
        nome: "TIE Fighter (Genérico - Enxame)", 
        faccao: "Império Galáctico",
        cascoBase: 3, escudoBase: 0, piloto: "generico",
        acoes: ['foco', 'pirueta', 'desvio'],
        manobras: [
            { velocidade: 1, direcao: 'frente', dificuldade: 'verde' },
            { velocidade: 2, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 2, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 2, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 2, direcao: 'leve_dir', dificuldade: 'verde' }, { velocidade: 2, direcao: 'fechada_dir', dificuldade: 'branca' },
            { velocidade: 3, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 3, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'fechada_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'k_turn', dificuldade: 'vermelha' },
            { velocidade: 4, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 4, direcao: 'k_turn', dificuldade: 'vermelha' },
            { velocidade: 5, direcao: 'frente', dificuldade: 'branca' }
        ]
    },
    // ==========================================
    // RESISTÊNCIA / REBELIÃO
    // ==========================================
    "t70_xwing": {
        nome: "T-70 X-Wing", 
        faccao: "Resistência / Rebelião",
        cascoBase: 3, escudoBase: 3, piloto: "generico",
        acoes: ['foco', 'mira', 'impulso'],
        manobras: [
            { velocidade: 1, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 1, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 1, direcao: 'leve_dir', dificuldade: 'verde' },
            { velocidade: 2, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 2, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 2, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 2, direcao: 'leve_dir', dificuldade: 'verde' }, { velocidade: 2, direcao: 'fechada_dir', dificuldade: 'branca' },
            { velocidade: 3, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 3, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'fechada_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 't_roll_esq', dificuldade: 'vermelha' }, { velocidade: 3, direcao: 't_roll_dir', dificuldade: 'vermelha' },
            { velocidade: 4, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 4, direcao: 'k_turn', dificuldade: 'vermelha' }
        ]
    },
    "mg100_bomber": {
        nome: "B/SF-17 Bomber (MG-100)", 
        faccao: "Resistência / Rebelião",
        cascoBase: 9, escudoBase: 3, piloto: "generico",
        acoes: ['foco', 'mira'],
        manobras: [
            { velocidade: 0, direcao: 'pare', dificuldade: 'vermelha' }, { velocidade: 1, direcao: 'fechada_esq', dificuldade: 'vermelha' }, { velocidade: 1, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 1, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 1, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 1, direcao: 'fechada_dir', dificuldade: 'vermelha' },
            { velocidade: 2, direcao: 'fechada_esq', dificuldade: 'vermelha' }, { velocidade: 2, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 2, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 2, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 2, direcao: 'fechada_dir', dificuldade: 'vermelha' },
            { velocidade: 3, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_dir', dificuldade: 'branca' }
        ]
    },
    "yt1300_falcon": {
        nome: "YT-1300 (Millennium Falcon)", 
        faccao: "Resistência / Rebelião",
        cascoBase: 8, escudoBase: 5, piloto: "generico",
        acoes: ['foco', 'mira', 'desvio'], 
        manobras: [
            { velocidade: 1, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 1, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 1, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 1, direcao: 'leve_dir', dificuldade: 'verde' }, { velocidade: 1, direcao: 'fechada_dir', dificuldade: 'branca' },
            { velocidade: 2, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 2, direcao: 'leve_esq', dificuldade: 'verde' }, { velocidade: 2, direcao: 'frente', dificuldade: 'verde' }, { velocidade: 2, direcao: 'leve_dir', dificuldade: 'verde' }, { velocidade: 2, direcao: 'fechada_dir', dificuldade: 'branca' },
            { velocidade: 3, direcao: 'fechada_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_esq', dificuldade: 'branca' }, { velocidade: 3, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 3, direcao: 'leve_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'fechada_dir', dificuldade: 'branca' }, { velocidade: 3, direcao: 'k_turn', dificuldade: 'vermelha' },
            { velocidade: 4, direcao: 'frente', dificuldade: 'branca' }, { velocidade: 4, direcao: 'k_turn', dificuldade: 'vermelha' }
        ]
    }
};