document.addEventListener('DOMContentLoaded', function(event)
{
   var headerDropdownMenu_dropdownToggle = document.querySelectorAll('#headerDropdownMenu .dropdown-toggle');
   headerDropdownMenu_dropdownToggle.forEach(item => 
   {
      var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
   });
   var headerDropdownMenu_dropdown = document.querySelectorAll('#headerDropdownMenu .dropdown');
   headerDropdownMenu_dropdown.forEach(item => 
   {
      item.addEventListener('shown.bs.dropdown', function(e)
      {
         e.currentTarget.classList.add('show');
      });
      item.addEventListener('hidden.bs.dropdown', function(e)
      {
         e.currentTarget.classList.remove('show');
      });
   });
});
