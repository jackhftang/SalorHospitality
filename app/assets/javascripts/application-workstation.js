/*
BillGastro -- The innovative Point Of Sales Software for your Restaurant
Copyright (C) 2011  Michael Franzl <michael@billgastro.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function toggle_admin_interface() {
  $.ajax({ type: 'POST', url:'/orders/toggle_admin_interface' });
}

$(document).ready(function() {
  // ":not([safari])" is desirable but not necessary selector
  $('input:checkbox:not([safari])').checkbox();
  $('input[safari]:checkbox').checkbox({cls:'jquery-safari-checkbox'});
  $('input:radio').checkbox();
  if ($('#flash').children().size() > 0) {
    $('#flash').fadeIn(1000);
    setTimeout(function(){ $('#flash').fadeOut(1000); }, 5000);
  }
})