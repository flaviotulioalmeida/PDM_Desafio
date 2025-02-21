// items.ts

export interface Item {
    id: number;
    itemName: string;
    itemPrice: string;
    category: string;
    itemImage: string; // A imagem será uma URL ou um caminho para a imagem
  }
  
  export const itemsArray: Item[] = [
    {
      id: 1,
      itemName: 'Hamburguer',
      itemPrice: '79,90',
      category: 'Hamburguer',
      itemImage: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      itemName: 'Hamburguer',
      itemPrice: '129,90',
      category: 'Hamburguer',
      itemImage: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      itemName: 'Hamburguer',
      itemPrice: '199,90',
      category: 'Hamburguer',
      itemImage: 'https://via.placeholder.com/150',
    },
  ];
  