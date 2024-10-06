(function(){
  
  // Chọn nút
  const btnTheme = document.getElementById('theme');
  // Kiểm tra sở thích chế độ tối ở cấp độ hệ điều hành
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Lấy sở thích chủ đề của người dùng từ local storage, nếu có
  const currentTheme = localStorage.getItem('theme');
  // Nếu sở thích của người dùng trong localStorage là tối...
  if (currentTheme == 'dark') {
    // ...thì thêm lớp .dark-theme vào body
    document.body.classList.toggle('dark-theme');
  // Ngược lại, nếu sở thích của người dùng trong localStorage là sáng...
  } else if (currentTheme == 'light') {
    // ...thì thêm lớp .light-theme vào body
    document.body.classList.toggle('light-theme');
  }
  
  // Lắng nghe sự kiện click trên nút 
  btnTheme.addEventListener('click', function() {
    // Nếu cài đặt hệ điều hành của người dùng là tối và khớp với lớp .dark-theme của chúng ta...
    if (prefersDarkScheme.matches) {
      // ...thì thêm lớp chế độ sáng
      document.body.classList.toggle('light-theme');
      // ...nhưng sử dụng .dark-theme nếu lớp .light-theme đã có trên body,
      var theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    } else {
      // Ngược lại, hãy làm điều tương tự, nhưng cho .dark-theme
      document.body.classList.toggle('dark-theme');
      var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }
    // Cuối cùng, hãy lưu sở thích hiện tại vào localStorage để tiếp tục sử dụng
    localStorage.setItem('theme', theme);
  });

})();