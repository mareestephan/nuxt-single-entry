<template>
    <div>
        <header class="pt-2 pb-0 pb-sm-2" id="header" style="background-color:#494949 !important">
            <a href="javascript:" id="scroll-to-top" aria-label="scroll to the top">
                <i class="icon-return"></i>
            </a>
            <div class="container">
                <div class="header-grid">
                    <div class="header-logo mt-4 mb-5 my-sm-0">
                        <a style="width:100%; height: auto" href="https://www.allsale.co.za/">
                            <img class="pr-sm-4 mb-sm-2 goHome" src="@/assets/all-sale/new-logo.svg" alt="" style="cursor: pointer;" aria-label="website logo">
                        </a>
                    </div>
                    <div class="header-mobile-menu-toggle d-flex d-sm-none">
                        <a class="" href="fad.html#nav" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="nav">
                            <img src="@/assets/all-sale/bars.svg" alt="" aria-label="menu image">
                        </a>
                    </div>
                    <div class="header-local-tag mr-0 mr-sm-2">
                    </div>
                    <div class="header-contact mr-0 mr-sm-2">
                    </div>
                    <div class="header-about mr-0 mr-sm-2">
                    </div>
                    <div class="header-join mr-0 mr-sm-2">
                        <a class="ml-5 joinClubLink" href="https://www.allsale.co.za/signup" style="display: inline;">JOIN THE CLUB</a>
                    </div>
                    <div class="header-profile loggedInHeader" style="display: none;">
                        <a class="mr-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="fad.html#">
                            <span id="userName" style="margin-right: 5px; color:white !important"></span>
                        </a>
                        <div class="dropdown-menu profile-dropdown">
                            <a class="dropdown-item mt-0" href="https://www.allsale.co.za/account/lists?id=WishList">View Wishlists</a>
                            <a class="dropdown-item" href="https://www.allsale.co.za/account/details">Update Personal Details</a>
                            <a class="dropdown-item" href="https://www.allsale.co.za/account/orders">Order History</a>
                            <a class="dropdown-item" href="https://www.allsale.co.za/return">Log a Free Return</a>
                            <a class="dropdown-item" href="https://www.allsale.co.za/account/addresses">Change Address</a>
                            <a class="dropdown-item" href="https://www.allsale.co.za/login">Logout</a>
                        </div>
                        <div class="mx-auto text-light-gray">
                            |
                        </div>
                    </div>
                    <div class="header-wishlist loggedInHeader" style="display: none;">
                        <a class="mr-2" href="https://www.allsale.co.za/account/lists?id=Wishlist">
                            <img src="@/assets/all-sale/_icons/heart.svg" aria-label="heart icon for wishlist">
                        </a>
                        <span id="favouriteListTotalLoggedIn" style="color:white !important"></span>
                    </div>
                    <div class="header-profile joinClubLink">
                        <a class="mr-2" style="color:white !important" href="https://www.allsale.co.za/login">SIGN IN</a>
                    </div>
                    <div class="header-wishlist joinClubLink">
                        <a class="mr-2" href="https://www.allsale.co.za/account/lists?id=Wishlist">
                            <img src="@/assets/all-sale/_icons/heart.svg" aria-label="heart icon for wishlist">
                        </a>
                        <span id="favouriteListTotalNotLoggedIn" style="color:white !important"></span>
                    </div>
                    <div class="header-search-bar px-0 mb-4 mb-sm-0">
                        <div class="input-group guide search-select search-bar search-input">
                            <div class="input-group-prepend">
                                <button class="btn btn-grey dropdown-toggle pr-5 pl-4 d-flex align-items-center" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="text-align: center; min-width: 181px;" aria-label="All Departments">
                                    <span class="d-none d-sm-inline searchSpan" style="color: black !important; margin: 0 auto;" data-categorycode="all">All Departments</span>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item catSpan" href="fad.html#" data-categorycode="all">All Departments</a>
                                    <a class="dropdown-item catSpan" href="fad.html#" data-categorycode="A">Baby &amp; Kids</a>
                                    <a class="dropdown-item catSpan" href="fad.html#" data-categorycode="F">Fashion</a>
                                    <a class="dropdown-item catSpan" href="fad.html#" data-categorycode="H">Health &amp; Beauty</a>
                                    <a class="dropdown-item catSpan" href="fad.html#" data-categorycode="L">Homeware</a>
                                    <a class="dropdown-item catSpan" href="fad.html#" data-categorycode="M">Household</a>
                                </div>
                            </div>
                            <input type="search" class="form-control mr-0 mr-sm-3" aria-label="Text input with dropdown button" id="Search" placeholder="">
                            <a href="fad.html#" class="search-btn-icon" id="SearchButton">
                                <img src="@/assets/all-sale/_icons/magnify-glass.svg" aria-label="search icon for search">
                            </a>
                        </div>
                    </div>
                    <div class="header-checkout">
                        <a class="btn btn-success btn-block checkout-btn text-white" href="https://www.allsale.co.za/cart">
                            <img class="mr-2 d-none d-sm-inline-block" src="@/assets/all-sale/_icons/cart.svg" alt="">
                            <img class="mr-2 d-flex d-sm-none" src="@/assets/all-sale/_icons/cart-orange.svg" aria-label="image for cart">
                            <span id="CartTotal" style="color:white !important"></span>
                            <span class="d-none d-sm-inline-block ml-2">CART</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div style="background-color:white;">
            <div class="container">
                <nav class="nav nav-pills nav-fill custom-nav collapse" id="nav">
                    <div class="nav-item nav-link">
                        <a href="https://www.allsale.co.za/a/baby&#32;&amp;&#32;kids" role="button" aria-expanded="false" aria-controls="fashionSubMenu" aria-label="Category Name">BABY &amp; KIDS
                        </a>
                        <div class="drop-content p-5 text-left collapse" style="background-color: #626262;">
                            <div style="display: grid; grid-auto-flow:column; justify-content:center; font-size:1.1rem">
                                <div>
                                    <a href="https://www.allsale.co.za/c/changing-bathing/aa" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">CHANGING &amp; BATHING</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/bath-skincare/aaa">Bath &amp; Skincare
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/shampoo-conditioner/aab">Shampoo &amp; Conditioner
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/wipes/aac">Wipes</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/baby-gear/ab" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">BABY GEAR
                                    </a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/changing-stations/abd">Changing stations
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/feeding/ac" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">FEEDING</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/feeding-gear/aca">Feeding Gear</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/dummies/acd">Dummies</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/high-chairs/ace">High Chairs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/toys/af" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">TOYS</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/baby-toddler-toys/afa">Baby &amp; Toddler Toys</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/dolls-action-figures/aff">Dolls &amp; Action Figures</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/pretend-play/afm">Pretend Play</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/sport-outdoor-toys/afn">Sport &amp; Outdoor Toys</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item nav-link">
                        <a href="https://www.allsale.co.za/f/fashion" role="button" aria-expanded="false" aria-controls="fashionSubMenu" aria-label="Category Name">FASHION</a>
                        <div class="drop-content p-5 text-left collapse" style="background-color: #626262;">
                            <div style="display: grid; grid-auto-flow:column; justify-content:center; font-size:1.1rem">
                                <div>
                                    <a href="https://www.allsale.co.za/c/accessories/fa" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">ACCESSORIES</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/mens-jewellery/faf">Men&#x27;s Jewellery
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/mens/fc" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">MENS</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/accessories/fck">Accessories</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/shirts/fcg">Shirts</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/womens/fb" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">WOMENS</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/dresses-skirts/fbd">Dresses &amp; Skirts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/jackets-outerwear/fbh">Jackets &amp; Outerwear
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/maternity/fbl">Maternity</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/pants-shorts/fbf">Pants &amp; Shorts
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/girls/fd" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">GIRLS</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/underwear-sleepwear/fdj">Underwear &amp; Sleepwear</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item nav-link">
                        <a href="https://www.allsale.co.za/h/health&#32;&amp;&#32;beauty" role="button" aria-expanded="false" aria-controls="fashionSubMenu" aria-label="Category Name">HEALTH &amp; BEAUTY
                        </a>
                        <div class="drop-content p-5 text-left collapse" style="background-color: #626262;">
                            <div style="display: grid; grid-auto-flow:column; justify-content:center; font-size:1.1rem">
                                <div>
                                    <a href="https://www.allsale.co.za/c/fragrances/ha" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">FRAGRANCES</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/men/haa">Men</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/women/hab">Women</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/makeup/hb" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">MAKEUP</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/eyes/hbb">Eyes</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/tools/hbe">Tools</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/toiletries/hc" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">TOILETRIES</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/bath-body/hca">Bath &amp; Body</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/mens/hcb">Mens</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/foot-care/hcl">Foot Care</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/hand-nail-care/hcd">Hand &amp; Nail Care
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/intimate-care/hce">Intimate Care</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/oral-care/hcf">Oral Care</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/shaving-grooming/hcg">Shaving &amp; Grooming
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/skin-care/hcj">Skin Care</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/hair-care/hd" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">HAIR CARE
                                    </a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/treatments/hdi">Treatments</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/hair-colouring/hdc">Hair Colouring</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/accessories-tools/hdd">Accessories &amp; Tools</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/mens/hde">Mens</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/kids/hdf">Kids</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/styling-products/hda">Styling Products
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/shampoo-conditioners/hdh">Shampoo &amp; Conditioners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/extensions-wigs/hdj">Extensions &amp; Wigs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/health-personal-care/he" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">HEALTH &amp; PERSONAL CARE</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/health-care/hea">Health Care</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/vision-care/hec">Vision Care</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/medical-appliances/hed">Medical Appliances
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item nav-link">
                        <a href="https://www.allsale.co.za/l/homeware" role="button" aria-expanded="false" aria-controls="fashionSubMenu" aria-label="Category Name">HOMEWARE</a>
                        <div class="drop-content p-5 text-left collapse" style="background-color: #626262;">
                            <div style="display: grid; grid-auto-flow:column; justify-content:center; font-size:1.1rem">
                                <div>
                                    <a href="https://www.allsale.co.za/c/home-decor/lb" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">HOME DECOR
                                    </a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/candles-home-fragrances/lbb">Candles &amp; Home Fragrances</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/home-decor-items/lbd">Home Decor Items
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/picture-frames/lbe">Picture Frames</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/kitchen/ld" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">KITCHEN</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/bakeware/lda">Bakeware</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/coffee-tea/ldb">Coffee &amp; Tea</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/cookware/ldc">Cookware</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/small-appliances-accessories/ldd">Small Appliances &amp; Accessories</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/organisation-storage/lde">Organisation &amp; Storage</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/utensils-tools/ldf">Utensils &amp; Tools
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/food-preparation/ldh">Food Preparation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/dining-entertaining/le" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">DINING &amp; ENTERTAINING</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/barware/lea">Barware</a>
                                        </li>
                                        <li>
                                            <a href="leb">Cutlery</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/crockery/lec">Crockery</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/drinkware/lee">Drinkware</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/serveware/lef">Serveware</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/tabletop-accessories/lei">Tabletop Accessories
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item nav-link">
                        <a href="https://www.allsale.co.za/m/household" role="button" aria-expanded="false" aria-controls="fashionSubMenu" aria-label="Category Name">HOUSEHOLD</a>
                        <div class="drop-content p-5 text-left collapse" style="background-color: #626262;">
                            <div style="display: grid; grid-auto-flow:column; justify-content:center; font-size:1.1rem">
                                <div>
                                    <a href="https://www.allsale.co.za/c/household-cleaning/ma" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">HOUSEHOLD CLEANING
                                    </a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/cleaning-products/maa">Cleaning Products
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/bathroom/mac">Bathroom</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/floors-carpet/mad">Floors &amp; Carpet
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/furniture-upholstery/mae">Furniture &amp; Upholstery</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/insect-repellant/maf">Insect Repellant
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/kitchen/mag">Kitchen</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/laundry/mah">Laundry</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/shoe-care/mai">Shoe Care</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/general-goods/mb" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">GENERAL GOODS
                                    </a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/general-goods/mba">General Goods</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://www.allsale.co.za/c/pantry/md" style="font-weight:800; font-size: 1.3rem; color: rgb(42, 183, 164);">PANTRY</a>
                                    <ul style="list-style-type: none; padding: 0; margin-top: 10px; color: white;">
                                        <li>
                                            <a href="https://www.allsale.co.za/c/drinks/mdc">Drinks</a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/snacks-cereals/mde">Snacks &amp; Cereals
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.allsale.co.za/c/international-cooking/mdg">International Cooking
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item nav-link">
                        <a href="https://www.allsale.co.za/brands">BRANDS</a>
                    </div>
                    <div class="nav-item nav-link promo">
                        <a data-toggle="collapse" href="leb#promoSubMenu" role="button" aria-expanded="false" aria-controls="promoSubMenu" aria-label="Offers">OFFERS</a>
                        <div class="promo-drop-content p-5 text-left collapse" id="promoSubMenu" style="cursor: default;">
                            <div class="row mt-4 mb-2">
                                <div class="col-12 col-sm-3 ml-0 ml-sm-5">
                                    <a href="javascript:;" class="font-weight-bold text-white" role="button" aria-expanded="false" style="cursor: default;" aria-controls="p1" aria-label="Quick Links">QUICK LINKS</a>
                                    <ul class="list-unstyled mt-4 collapse" id="p1">
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/brands">Shop by Brand
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/search?promo=1">Featured</a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/search?promo=2">Everyday Essentials</a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/search?promo=3">Member Exclusive
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-3">
                                    <a href="javascript:;" class="font-weight-bold text-white" role="button" aria-expanded="false" style="cursor: default;" aria-controls="p3" aria-label="New In">NEW IN</a>
                                    <ul class="list-unstyled mt-4 collapse" id="p3">
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/c/womens/fb?sort=Newest">New In Women's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/c/mens/fc?sort=Newest">New In Men's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/c/homeware/l?sort=Newest">New In Home
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/c/watches/fad?sort=Newest">New In Watches
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/c/fragrances/ha?sort=Newest">New In Fragrances
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white" href="https://www.allsale.co.za/c/toys/af?sort=Newest">New In Toys</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>

</template>

<script>
export default {};
</script>

<style>
</style>
