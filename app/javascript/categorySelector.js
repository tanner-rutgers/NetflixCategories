const NAV_CLASS = "tabbed-primary-navigation";
const NAV_ITEM_CLASS = "navigation-tab";

const CATEGORY_LIST_TITLE = "Hidden Categories";
const CATEGORY_LIST_NAV_CLASS = "hidden-categories-nav";
const CATEGORY_LIST_DIV_CLASS = "hidden-categories-div";
const CATEGORY_LIST_CLASS = "hidden-categories-list";
const CATEGORY_LIST_ITEM_CLASS = "hidden-categories-list-item";
const CATEGORY_LIST_ITEM_ANCHOR_CLASS = "hidden-categories-list-anchor-item";
const CATEGORY_LIST_DIV_ID = "hidden-category-list-div";

const CATEGORY_LINK = "https://www.netflix.com/browse/genre/";

function addCategorySelector(navList) {
  var categoryListAnchor = document.createElement("a");
  categoryListAnchor.className = CATEGORY_LIST_NAV_CLASS;

  var categoryListText = document.createTextNode(CATEGORY_LIST_TITLE);
  categoryListAnchor.appendChild(categoryListText);

  categoryListAnchor.onclick = function() { showCategoryList(); };

  var categoryListItem = document.createElement("li");
  categoryListItem.className = NAV_ITEM_CLASS;
  categoryListItem.appendChild(categoryListAnchor);

  navList.appendChild(categoryListItem);
  navList.appendChild(categoryListDiv());
}

function categoryListDiv() {
  var categoryListDiv = document.createElement("div");
  categoryListDiv.className = CATEGORY_LIST_DIV_CLASS;
  categoryListDiv.id = CATEGORY_LIST_DIV_ID;

  categoryListDiv.appendChild(categoryListNode(CATEGORIES));

  return categoryListDiv;
}

function categoryListNode(categories) {
  var categoryList = document.createElement("ul");
  categoryList.className = CATEGORY_LIST_CLASS;

  for (var category in categories) {
    if (categories.hasOwnProperty(category)) {
      categoryList.appendChild(categoryListItemNode(category, categories[category]));
    }
  }

  return categoryList;
}

function categoryListItemNode(categoryName, category) {
  var categoryListItem = document.createElement("li");
  categoryListItem.className = CATEGORY_LIST_ITEM_CLASS;

  var categoryListItemAnchor = document.createElement("a");
  categoryListItemAnchor.className = CATEGORY_LIST_ITEM_ANCHOR_CLASS;
  categoryListItemAnchor.href = categoryLink(category);

  categoryListItemText = document.createTextNode(categoryName);
  categoryListItemAnchor.appendChild(categoryListItemText);
  categoryListItem.appendChild(categoryListItemAnchor);

  if (category.subcategories) {
    categoryListItem.appendChild(categoryListNode(category.subcategories));
  }

  return categoryListItem;
}

function showCategoryList() {
  var categoryListDiv = document.getElementById(CATEGORY_LIST_DIV_ID);
  categoryListDiv.classList.toggle("show");
}

function categoryLink(category) {
  return CATEGORY_LINK + category.code;
}

window.onclick = function(event) {
  if (!event.target.matches('.' + CATEGORY_LIST_ITEM_CLASS) && !event.target.matches('.' + CATEGORY_LIST_NAV_CLASS)) {
    document.getElementById(CATEGORY_LIST_DIV_ID).classList.remove("show");
  }
}