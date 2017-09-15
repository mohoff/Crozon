/*
jQuery(document).ready(function () {
	$.get(
    ghost.url.api('tags', {
      limit: 'all',
      include: 'count.posts',
      order: 'count.posts DESC'
    })
  ).done(fillTagsInAutocomplete);
});

function fillTagsInAutocomplete(data) {
	var tagNamesArray = data.tags.map(function(tag) {return tag.name;});
	var tagNames = {};
  for (var i = 0; i < tagNamesArray.length; ++i) {
    tagNames[tagNamesArray[i]] = null;
	}

	$('.chips-autocomplete').material_chip({
		placeholder: 'Search for tags',
		//secondaryPlaceholder: '+Tag',
    autocompleteOptions: {
      data: tagNames,
      limit: Infinity,
      minLength: 1
    }
  });
}

function updateCardsByTags(tags) {
	//api.posts.browse({filter: "tags:tags + id:-5", limit="3"});

}
*/
