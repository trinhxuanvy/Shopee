// $(document).ready(function () {
//     const items = [
//         {
//             name: 'Thuốc nhuộm tóc',
//             imageUrl: '1',
//             classify: 'Mỹ phẩm',
//             type: 'Hàng Nhật Bản',
//             price: 10,
//             store: 'Kho Củ Chi',
//             sold: 10,
//         },
//         {
//             name: 'Thuốc nhuộm tóc',
//             imageUrl: '2',
//             classify: 'Mỹ phẩm',
//             type: 'Hàng Nhật Bản',
//             price: 10,
//             store: 'Kho Bình Thạnh',
//             sold: 10,
//         },
//         {
//             name: 'Thuốc nhuộm tóc',
//             imageUrl: '3',
//             classify: 'Mỹ phẩm',
//             type: 'Hàng Nhật Bản',
//             store: 'Kho Thủ Đức',
//             price: 10,
//             sold: 10,
//         }
//     ]


//     function Render() {
//         items.forEach(item => {
//             const html = items.map(item => `
//             <div class="item">
//                 <div class="item-name">
//                     <a href="">
//                         <p>${item.name}</p>
//                         <div class="item-name-image">
//                             <img src="images/item-cate-${item.imageUrl}.jpg" alt="">
//                         </div>
//                     </a>
//                 </div>
//                 <div class="item-classify">
//                     <a href="">${item.classify}</a>
//                 </div>
//                 <div class="item-type">
//                     <a href="">${item.type}</a>
//                 </div>
//                 <div class="item-price">
//                     <p class = "price">$${item.price}</p>
//                 </div>
//                 <div class="item-store">
//                     <a href="">${item.store}</a>
//                 </div>
//                 <div class="item-sold">
//                     <p class="sold">${item.sold}</p>
//                 </div>
//                 <div class="item-info">
//                     <textarea class="info" name="Mô tả" id=""></textarea>
//                 </div>
//             </div>
//             `)

//             $('.product-item').html(html);
//         });
//     }

//     Render();

//     function AddProduct() {
//         items.push({
//             name: 'Thuốc nhuộm tóc',
//             imageUrl: Math.floor(Math.random() * 6) + 1,
//             classify: 'Mỹ phẩm',
//             type: 'Hàng Nhật Bản',
//             price: Math.floor(Math.random() * 10) + 1,
//             store: 'Kho ' + Math.floor(Math.random() * 10) + 1,
//             sold: Math.floor(Math.random() * 10) + 1,
//         })

//         Render();
//     }

//     $().load("/views/hello.html", "data", function (response, status, request) {
//         this; // dom element
//         Render();
//         console.log('ok');
//     });

//     $('.add-product').on('click', function () {
//         AddProduct();
//     });
// });