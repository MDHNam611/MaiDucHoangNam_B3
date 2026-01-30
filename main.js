// Dữ liệu sản phẩm
const productsData = [
  {
    "id": 6,
    "title": "Classic Comfort Fit Joggers",
    "slug": "classic-comfort-fit-joggers",
    "price": 25,
    "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
    "category": {
      "id": 1,
      "name": "Este es el nuevo nombre del producto",
      "slug": "este-es-el-nuevo-nombre-del-producto",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T21:40:37.000Z"
    },
    "images": [
      "https://i.imgur.com/ZKGofuB.jpeg",
      "https://i.imgur.com/GJi73H0.jpeg",
      "https://i.imgur.com/633Fqrz.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 14,
    "title": "Classic High-Waisted Athletic Shorts",
    "slug": "classic-high-waisted-athletic-shorts",
    "price": 43,
    "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
    "category": {
      "id": 1,
      "name": "Este es el nuevo nombre del producto",
      "slug": "este-es-el-nuevo-nombre-del-producto",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T21:40:37.000Z"
    },
    "images": [
      "https://i.imgur.com/eGOUveI.jpeg",
      "https://i.imgur.com/UcsGO7E.jpeg",
      "https://i.imgur.com/NLn4e7S.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 15,
    "title": "Classic White Crew Neck T-Shirt",
    "slug": "classic-white-crew-neck-t-shirt",
    "price": 39,
    "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    "category": {
      "id": 1,
      "name": "Este es el nuevo nombre del producto",
      "slug": "este-es-el-nuevo-nombre-del-producto",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T21:40:37.000Z"
    },
    "images": [
      "https://i.imgur.com/axsyGpD.jpeg",
      "https://i.imgur.com/T8oq9X2.jpeg",
      "https://i.imgur.com/J6MinJn.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 16,
    "title": "Classic White Tee - Timeless Style and Comfort",
    "slug": "classic-white-tee-timeless-style-and-comfort",
    "price": 73,
    "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    "category": {
      "id": 1,
      "name": "Este es el nuevo nombre del producto",
      "slug": "este-es-el-nuevo-nombre-del-producto",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T21:40:37.000Z"
    },
    "images": [
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 17,
    "title": "Classic Black T-Shirt",
    "slug": "classic-black-t-shirt",
    "price": 35,
    "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
    "category": {
      "id": 1,
      "name": "Este es el nuevo nombre del producto",
      "slug": "este-es-el-nuevo-nombre-del-producto",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T21:40:37.000Z"
    },
    "images": [
      "https://i.imgur.com/9DqEOV5.jpeg",
      "https://i.imgur.com/ae0AEYn.jpeg",
      "https://i.imgur.com/mZ4rUjj.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 18,
    "title": "Sleek White & Orange Wireless Gaming Controller",
    "slug": "sleek-white-orange-wireless-gaming-controller",
    "price": 69,
    "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T17:42:51.000Z"
    },
    "images": [
      "https://i.imgur.com/ZANVnHE.jpeg",
      "https://i.imgur.com/Ro5z6Tn.jpeg",
      "https://i.imgur.com/woA93Li.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 19,
    "title": "Sleek Wireless Headphone & Inked Earbud Set",
    "slug": "sleek-wireless-headphone-inked-earbud-set",
    "price": 44,
    "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T17:42:51.000Z"
    },
    "images": [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  },
  {
    "id": 20,
    "title": "Sleek Comfort-Fit Over-Ear Headphones",
    "slug": "sleek-comfort-fit-over-ear-headphones",
    "price": 28,
    "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    "category": {
      "id": 2,
      "name": "Electronics",
      "slug": "electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2026-01-29T17:42:51.000Z",
      "updatedAt": "2026-01-29T17:42:51.000Z"
    },
    "images": [
      "https://i.imgur.com/SolkFEB.jpeg",
      "https://i.imgur.com/KIGW49u.jpeg",
      "https://i.imgur.com/mWwek7p.jpeg"
    ],
    "creationAt": "2026-01-29T17:42:51.000Z",
    "updatedAt": "2026-01-29T17:42:51.000Z"
  }
];

/**
 * Hàm getAll - Lấy tất cả sản phẩm
 * @returns {Array} Danh sách tất cả sản phẩm
 */
function getAll() {
  return productsData;
}

// State management
let filteredData = [...productsData];
let currentPage = 1;
let itemsPerPage = 10;
let sortField = null;
let sortOrder = 'asc'; // 'asc' hoặc 'desc'
let searchKeyword = '';

// Modal image gallery state
let modalImageIndex = 0;
let modalImages = [];

/**
 * Hàm search - Tìm kiếm sản phẩm theo tên
 * @param {string} keyword - Từ khóa tìm kiếm
 */
function searchProducts(keyword) {
  searchKeyword = keyword.toLowerCase();
  filteredData = productsData.filter(product => 
    product.title.toLowerCase().includes(searchKeyword)
  );
  
  // Reset về trang 1 khi tìm kiếm
  currentPage = 1;
  updateTable();
}

/**
 * Hàm sắp xếp - Sắp xếp sản phẩm theo giá hoặc tên
 * @param {string} field - Trường cần sắp xếp ('price' hoặc 'title')
 * @param {string} order - Thứ tự sắp xếp ('asc' hoặc 'desc')
 */
function sortProducts(field, order) {
  sortField = field;
  sortOrder = order;

  // Xóa active state từ tất cả nút sort
  document.querySelectorAll('.btn-sort').forEach(btn => {
    btn.classList.remove('active');
  });

  // Thêm active state cho nút được chọn
  const activeBtn = document.querySelector(`[data-sort="${field}-${order}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  filteredData.sort((a, b) => {
    let compareA, compareB;

    if (field === 'price') {
      compareA = a.price;
      compareB = b.price;
    } else if (field === 'title') {
      compareA = a.title.toLowerCase();
      compareB = b.title.toLowerCase();
    }

    if (order === 'asc') {
      return compareA > compareB ? 1 : compareA < compareB ? -1 : 0;
    } else {
      return compareA < compareB ? 1 : compareA > compareB ? -1 : 0;
    }
  });

  currentPage = 1;
  updateTable();
}

/**
 * Hàm thay đổi số hàng per page
 * @param {number} count - Số hàng per page
 */
function changeItemsPerPage(count) {
  itemsPerPage = parseInt(count);
  currentPage = 1;
  updateTable();
}

/**
 * Hàm chuyển trang
 * @param {number} page - Số trang
 */
function goToPage(page) {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    updateTable();
    
    // Scroll to table
    document.getElementById('productsTable').scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Hàm trang trước
 */
function previousPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

/**
 * Hàm trang sau
 */
function nextPage() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

/**
 * Hàm tính toán trang
 */
function getPaginatedData() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredData.slice(startIndex, endIndex);
}

/**
 * Hàm render bảng
 */
function renderTable() {
  const tableBody = document.getElementById('tableBody');
  const paginatedData = getPaginatedData();

  // Nếu không có dữ liệu
  if (!paginatedData || paginatedData.length === 0) {
    tableBody.innerHTML = '<tr class="no-data"><td colspan="6">Không tìm thấy sản phẩm nào</td></tr>';
    return;
  }

  // Xóa dữ liệu cũ
  tableBody.innerHTML = '';

  // Thêm từng sản phẩm vào bảng
  paginatedData.forEach((product) => {
    const row = document.createElement('tr');
    
    // Lấy hình ảnh đầu tiên
    const imageUrl = product.images && product.images.length > 0 
      ? product.images[0] 
      : 'https://placehold.co/80x80?text=No+Image';

    // Định dạng ngày tháng
    const createdDate = new Date(product.creationAt).toLocaleDateString('vi-VN');

    // Cắt ngắn mô tả
    const shortDescription = product.description.substring(0, 100) + '...';

    row.innerHTML = `
      <td>
        <img src="${imageUrl}" alt="${product.title}" class="product-image" onerror="this.src='https://placehold.co/80x80?text=Error'" title="Click to view full image" style="cursor: pointer;" onclick="viewImage('${imageUrl}', '${product.title.replace(/'/g, "\\'")}', ${JSON.stringify(product.images || [])})">
      </td>
      <td><strong>${product.title}</strong></td>
      <td><span class="category-badge">${product.category.name}</span></td>
      <td><span class="price">$${product.price}</span></td>
      <td><span class="description">${shortDescription}</span></td>
      <td>${createdDate}</td>
    `;

    tableBody.appendChild(row);
  });
}

/**
 * Hàm render pagination buttons
 */
function renderPagination() {
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  // Cập nhật info
  document.getElementById('showingStart').textContent = totalItems > 0 ? startIndex : 0;
  document.getElementById('showingEnd').textContent = endIndex;
  document.getElementById('totalItems').textContent = totalItems;

  // Cập nhật nút previous/next
  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage === totalPages || totalPages === 0;

  // Render page buttons
  const pageNumbersContainer = document.getElementById('pageNumbers');
  pageNumbersContainer.innerHTML = '';

  // Hiển thị tối đa 5 nút trang
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  // Điều chỉnh startPage nếu cần
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  if (startPage > 1) {
    const firstPageBtn = document.createElement('button');
    firstPageBtn.textContent = '1';
    firstPageBtn.className = 'page-btn';
    firstPageBtn.onclick = () => goToPage(1);
    pageNumbersContainer.appendChild(firstPageBtn);

    if (startPage > 2) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.style.padding = '8px 4px';
      pageNumbersContainer.appendChild(dots);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    pageBtn.onclick = () => goToPage(i);
    pageNumbersContainer.appendChild(pageBtn);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.style.padding = '8px 4px';
      pageNumbersContainer.appendChild(dots);
    }

    const lastPageBtn = document.createElement('button');
    lastPageBtn.textContent = totalPages;
    lastPageBtn.className = 'page-btn';
    lastPageBtn.onclick = () => goToPage(totalPages);
    pageNumbersContainer.appendChild(lastPageBtn);
  }
}

/**
 * Hàm cập nhật toàn bộ bảng và pagination
 */
function updateTable() {
  renderTable();
  renderPagination();
}

/**
 * Hàm xem hình ảnh với gallery
 */
function viewImage(imageUrl, title, images = [imageUrl]) {
  modalImages = images.filter(img => img); // Lọc ảnh trống
  modalImageIndex = modalImages.indexOf(imageUrl);
  
  if (modalImageIndex === -1) {
    modalImageIndex = 0;
  }

  const modal = document.createElement('div');
  modal.id = 'imageModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    cursor: pointer;
  `;

  const container = document.createElement('div');
  container.style.cssText = `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const img = document.createElement('img');
  img.id = 'modalImage';
  img.src = modalImages[modalImageIndex];
  img.alt = title;
  img.style.cssText = `
    max-width: 85vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  `;
  img.onerror = function() {
    this.src = 'https://placehold.co/800x600?text=Image+Not+Found';
  };

  // Nút close
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    background-color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 10001;
    transition: all 0.3s;
  `;
  closeBtn.onmouseover = () => closeBtn.style.backgroundColor = '#f0f0f0';
  closeBtn.onmouseout = () => closeBtn.style.backgroundColor = 'white';
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    modal.remove();
  };

  // Nút Previous
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '‹';
  prevBtn.style.cssText = `
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-size: 32px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 10001;
    transition: all 0.3s;
  `;
  prevBtn.onmouseover = () => {
    prevBtn.style.backgroundColor = 'white';
    prevBtn.style.transform = 'translateY(-50%) scale(1.1)';
  };
  prevBtn.onmouseout = () => {
    prevBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    prevBtn.style.transform = 'translateY(-50%) scale(1)';
  };
  prevBtn.onclick = (e) => {
    e.stopPropagation();
    previousImage();
  };

  // Nút Next
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '›';
  nextBtn.style.cssText = `
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-size: 32px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 10001;
    transition: all 0.3s;
  `;
  nextBtn.onmouseover = () => {
    nextBtn.style.backgroundColor = 'white';
    nextBtn.style.transform = 'translateY(-50%) scale(1.1)';
  };
  nextBtn.onmouseout = () => {
    nextBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    nextBtn.style.transform = 'translateY(-50%) scale(1)';
  };
  nextBtn.onclick = (e) => {
    e.stopPropagation();
    nextImage();
  };

  // Hiển thị số ảnh
  const counterDiv = document.createElement('div');
  counterDiv.id = 'imageCounter';
  counterDiv.style.cssText = `
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    z-index: 10001;
  `;
  counterDiv.textContent = `${modalImageIndex + 1} / ${modalImages.length}`;

  // Chỉ hiển thị nút điều hướng nếu có nhiều hơn 1 ảnh
  if (modalImages.length > 1) {
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);
    container.appendChild(counterDiv);
  }

  container.appendChild(img);
  container.appendChild(closeBtn);
  modal.appendChild(container);
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
  document.body.appendChild(modal);
}

/**
 * Hàm xem ảnh trước
 */
function previousImage() {
  if (modalImages.length === 0) return;
  modalImageIndex = (modalImageIndex - 1 + modalImages.length) % modalImages.length;
  updateModalImage();
}

/**
 * Hàm xem ảnh sau
 */
function nextImage() {
  if (modalImages.length === 0) return;
  modalImageIndex = (modalImageIndex + 1) % modalImages.length;
  updateModalImage();
}

/**
 * Hàm cập nhật ảnh trong modal
 */
function updateModalImage() {
  const img = document.getElementById('modalImage');
  const counter = document.getElementById('imageCounter');
  
  if (img) {
    img.src = modalImages[modalImageIndex];
  }
  
  if (counter) {
    counter.textContent = `${modalImageIndex + 1} / ${modalImages.length}`;
  }
}

/**
 * Load sản phẩm từ API
 */
async function loadProductsFromAPI() {
  try {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    productsData.length = 0;
    productsData.push(...data);
    filteredData = [...productsData];
    updateTable();
  } catch (error) {
    console.error('Lỗi load dữ liệu:', error);
    updateTable(); // Hiển thị dữ liệu mặc định nếu API fail
  }
}

// Gọi hàm render khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
  // Load dữ liệu từ API
  loadProductsFromAPI();

  // Event listeners cho search
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    searchProducts(e.target.value);
  });

  // Event listeners cho sort buttons
  document.getElementById('sortPriceAsc').setAttribute('data-sort', 'price-asc');
  document.getElementById('sortPriceDesc').setAttribute('data-sort', 'price-desc');
  document.getElementById('sortTitleAsc').setAttribute('data-sort', 'title-asc');
  document.getElementById('sortTitleDesc').setAttribute('data-sort', 'title-desc');

  document.getElementById('sortPriceAsc').addEventListener('click', () => sortProducts('price', 'asc'));
  document.getElementById('sortPriceDesc').addEventListener('click', () => sortProducts('price', 'desc'));
  document.getElementById('sortTitleAsc').addEventListener('click', () => sortProducts('title', 'asc'));
  document.getElementById('sortTitleDesc').addEventListener('click', () => sortProducts('title', 'desc'));

  // Event listener cho items per page
  document.getElementById('itemsPerPage').addEventListener('change', (e) => {
    changeItemsPerPage(e.target.value);
  });
});
