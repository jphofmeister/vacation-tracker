$(document).ready(
  $.ajax({
    url: "/api/day",
    success: (result, status, xhr) => {
      const ul = $("<ul>");
      for (let i = 0; i < result.length; i++) {
        let li = $("<li>");
        li.append(result[i].date + "</li>");
        ul.append(li);
      }
      ul.append("</ul>");
      $("#datesList").html(ul);
    }
  })
)