json.products @products do |product|
  json.name product.name
  json.description product.description
  json.shine product.shine
  json.price product.price
  json.rarity product.rarity
  json.color product.color
  json.faces product.faces

  json.images product.images do |image|
    json.url image.url
  end

  json.reviews product.reviews do |review|
    json.url review.rating
    json.url review.comment
    json.url review.email
  end
end
