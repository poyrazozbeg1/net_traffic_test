// Ziyaretçi sayısını depolamak için localStorage kullanacağız
let visitorCount = localStorage.getItem('visitorCount') || 0;

// Her sayfa yenilendiğinde ziyaretçi sayısını arttır
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// HTML içindeki span elementini güncel ziyaretçi sayısıyla güncelle
document.getElementById('visitorCount').textContent = visitorCount;
