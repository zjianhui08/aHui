    var str1 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321371344&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=1&ps=6"
    var str2 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321389849&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=2&ps=6"
    var str3 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321399703&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=3&ps=6"
    var str4 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321409142&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=4&ps=6"
    var str5 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321425783&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=5&ps=6"
    var str6 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321440706&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=6&ps=6"
    var str7 = "https://mall.sogou.com/api/product/product/product_list?c=h5&s=20000&t=1574321460031&v=1.0&category_id=0&sort_field=1&sort_order=2&pn=7&ps=6"
    
    var arrDataLink = [str1,str2,str3,str4,str5,str6,str7]
      for(var i = 0,arrStrGroup = [],len = arrDataLink.length; i < len; i++){
        arrStrGroup.push(arrDataLink[i].substring(arrDataLink[i].indexOf('&t')+3,arrDataLink[i].indexOf('&v')))
      }
      export default arrStrGroup
