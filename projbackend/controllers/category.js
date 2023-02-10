const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB"
      });
    }
    req.category = cate;
    next();
  });
};

exports.createCategory = (req,res) => {
    const category = new Category(req.body);
    category.save((err,category) => {
        if(err){
            return res.status(400).json({
                error: "NOT able to save category in DB"
            })
        }
        res.json({category});
    })
}

exports.getCategory = (req, res) => {
  res.json(req.category);
}

exports.getAllCategory = (req, res) => {
  Category.find().exec((err, category) => {
    if(err) {
      return res.status(400).json({
        error: "No category found"
      });
    }
    res.json(category);
})
}

exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;

  category.save((err,updatedCategory) => {
    if(err){
      return res.status(400).json({
        error: "Failed to update category"
    })
  }
  res.json(updatedCategory)
  })
}

exports.removeCategory =(req, res) =>{
  const category = req.category;
  category.remove((err,removedCategory) => {
    if(err){
      return res.status(400).json({
        error: "Failed to remove category"
      })
    }
    res.json({
      message: `${removedCategory} category removed successfully`
    })
})
}