import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'entradas' | 'fuertes' | 'bebidas' | 'postres';
  icon: string;
  popular?: boolean;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  activeCategory: string = 'todos';
  
  categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'entradas', name: 'Entradas' },
    { id: 'fuertes', name: 'Platos Fuertes' },
    { id: 'postres', name: 'Postres' },
    { id: 'bebidas', name: 'Bebidas' }
  ];

  menuItems: MenuItem[] = [
    {
      name: 'Tamal Lojano',
      description: 'Masa tierna de maíz rellena de pollo hilado, envuelta en hoja de achira y servida caliente.',
      price: 2.50,
      category: 'entradas',
      icon: '🫔',
      popular: true
    },
    {
      name: 'Humitas de El Valle',
      description: 'Tradicionales humitas de maíz choclo tierno con abundante queso fresco de la zona.',
      price: 2.00,
      category: 'entradas',
      icon: '🌽'
    },
    {
      name: 'Empanadas de Viento',
      description: 'Empanadas gigantes fritas rellenas de queso derretido, espolvoreadas con un toque de azúcar.',
      price: 3.00,
      category: 'entradas',
      icon: '🥟'
    },
    {
      name: 'Cecina Lojana Tradicional',
      description: 'Corte de cerdo finamente fileteado, adobado con ajo y comino, asado a la brasa de leña. Acompañado de yuca frita, aguacate y curtido.',
      price: 11.50,
      category: 'fuertes',
      icon: '🥩',
      popular: true
    },
    {
      name: 'Repe Lojano Especial',
      description: 'La sopa insignia de Loja: crema suave de guineo verde, quesillo lojano, leche y cilantro fresco, acompañada de aguacate.',
      price: 6.50,
      category: 'fuertes',
      icon: '🍲',
      popular: true
    },
    {
      name: 'Arroz con Pollo Chentuino',
      description: 'Arroz sazonado al achiote con pollo desmenuzado, vegetales de temporada y maduro frito.',
      price: 9.00,
      category: 'fuertes',
      icon: '🍛'
    },
    {
      name: 'Lomo Fino en Salsa de Café',
      description: 'Medallón de lomo fino a la parilla bañado en una reducción especial de café de altura lojano y finas hierbas.',
      price: 14.50,
      category: 'fuertes',
      icon: '🥩'
    },
    {
      name: 'Quesadilla Lojana con Helado',
      description: 'La clásica quesadilla dulce horneada en horno de leña, acompañada de una bola de helado artesanal de vainilla.',
      price: 4.00,
      category: 'postres',
      icon: '🥮',
      popular: true
    },
    {
      name: 'Higos con Queso',
      description: 'Higos cocidos a fuego lento en miel de panela especiada, servidos con una generosa rebanada de quesillo fresco.',
      price: 3.50,
      category: 'postres',
      icon: '🍯'
    },
    {
      name: 'Horchata Lojana Tradicional',
      description: 'Infusión medicinal de 28 hierbas aromáticas y flores de Loja, servida caliente o fría con zumo de limón.',
      price: 1.75,
      category: 'bebidas',
      icon: '☕',
      popular: true
    },
    {
      name: 'Café de Altura Filtrado',
      description: 'Café lojano de especialidad, cultivado a más de 1800 msnm, filtrado al instante.',
      price: 2.00,
      category: 'bebidas',
      icon: '☕'
    }
  ];

  setCategory(category: string) {
    this.activeCategory = category;
  }

  get filteredItems() {
    if (this.activeCategory === 'todos') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.activeCategory);
  }
}
