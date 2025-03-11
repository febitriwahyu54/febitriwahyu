document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
            items: [{id: 1, name: 'robusta brazil', img: 'product1.jpg', price: 20000},
                   {id: 2, name: 'arabica', img: 'product2.png', price: 25000},
                   {id: 3, name: 'whitecofee', img: 'product3.jpg', price: 50000},
                   {id: 4, name: 'coffe tubruk', img: 'product4.jpg', price: 50000},
                   {id: 5, name: 'espresso', img: 'product5.jpg', price: 50000},
            ],
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newitem) {
            // cek barang yang sama
            const cartitem = this.items.find((item) => item.id === newitem.id);
            
            // kalau card kosong
            if(!cartitem) {
                this.items.push({...newitem, quantity: 1, total: newitem.price });
                this.quantity++;
                this.total += newitem.price;
            } else {
                // jika barang sudah ada, cek barang beda atau tidak
                this.items = this.items.map((item) => {
                    // jika berbeda
                    if (item.id !== newitem.id) {
                        return item;
                    } else {
                        // jika sudah ada barang tambah
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // remove barang berdasarkan id
            const cartitem =this.items.find((item) => item.id === id);

            // jika item > 1 
            if(cartitem.quantity > 1) {
                // telusuhri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartitem.quantity === 1) {
                // jika barangnya 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartitem.price;
            }
        },
    });
});


//  konversi rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};