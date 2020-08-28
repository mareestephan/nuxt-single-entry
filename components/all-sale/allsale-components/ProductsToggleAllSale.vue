<template>
    <div class="col-10 d-block offset-1 col-sm-3 offset-sm-0 px-0 mb-2 filterby-mobile">
        <a class="bg-teal text-white btn py-2 px-4 col-10 text-left d-sm-none" href="fad.html#filterBy" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="filterBy">FILTER BY</a>
        <div class="col-12 side-collapse guide px-0 px-sm-3 mx-auto row collapse multi-collapse d-sm-block" id="filterBy">
            <div id="selectedFilters" class="mb-0 mb-sm-4  bg-light-teal pt-3 pr-3 pb-1 pl-3 guide wide-spacing" style="display:none">
                <span class="font-weight-bold">REFINE BY</span>
                <div class="text-orange">
                    <ul class="list-unstyled mt-3 subCategoryFilter">
                        <li class="removeFilterTemplate">
                            <span class="close-icon">
                                <img class="icon m-auto" src="@/assets/all-sale/_icons/times.svg" alt="">
                            </span>
                            <h6 class="bold d-inline-block">
                                <small></small>
                            </h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mb-0 mb-sm-4 bg-light-teal p-3 guide wide-spacing" style="">
                <a id="genderFilter" class="filterToggle collapsed" data-toggle="collapse" href="fad.html#gender" role="button" aria-expanded="false" aria-controls="gender">
                    <div class="font-weight-bold bg-light-teal">GENDER</div>
                </a>
                <div class="collapse mt-3 checkboxes filterList" id="gender">
                    <label class="container">
                        <input type="checkbox" class="genderFilter" data-type="Gender" data-value="Mens" data-text="Mens">
                        <span class="checkmark"></span>
                        Mens (1287)
                    </label>
                    <label class="container">
                        <input type="checkbox" class="genderFilter" data-type="Gender" data-value="Unisex" data-text="Unisex">
                        <span class="checkmark"></span>
                        Unisex (1)
                    </label>
                    <label class="container">
                        <input type="checkbox" class="genderFilter" data-type="Gender" data-value="Womens" data-text="Womens">
                        <span class="checkmark"></span>
                        Womens (1602)
                    </label>
                </div>
            </div>
            <div class="mb-0 mb-sm-4 bg-light-teal p-3 guide wide-spacing" style="">
                <a id="categoryFilter" class="filterToggle collapsed" data-toggle="collapse" href="fad.html#category" role="button" aria-expanded="false" aria-controls="category">
                    <div class="font-weight-bold bg-light-teal">CATEGORY</div>
                </a>
                <div class="collapse mt-3 checkboxes filterList" id="category">
                    <label class="container">
                        <input type="checkbox" class="categoryFilter" data-type="Category" data-value="FAD02" data-text="Men&#x27;s Watches">
                        <span class="checkmark"></span>
                        Men&#x27;s Watches (1278)
                    </label>
                    <label class="container">
                        <input type="checkbox" class="categoryFilter" data-type="Category" data-value="FAD03" data-text="Unisex Watches">
                        <span class="checkmark"></span>
                        Unisex Watches (10)
                    </label>
                    <label class="container">
                        <input type="checkbox" class="categoryFilter" data-type="Category" data-value="FAD01" data-text="Women&#x27;s Watches">
                        <span class="checkmark"></span>
                        Women&#x27;s Watches (1602)
                    </label>
                </div>
            </div>
            <div class="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing" style="">
                <a id="brandFilter" class="filterToggle collapsed" data-toggle="collapse" href="fad.html#brand" role="button" aria-expanded="false" aria-controls="brand">
                    <div class="font-weight-bold bg-light-teal">BRAND</div>
                </a>
                <div class="collapse checkboxes filterList" id="brand">
                    <div id="showMoreDiv0" class="" data-page="0" style="">
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Alex And Ani" data-text="Alex And Ani">
                            <span class="checkmark"></span>
                            Alex And Ani (46)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Anne Klein" data-text="Anne Klein">
                            <span class="checkmark"></span>
                            Anne Klein (22)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="AquaSwiss" data-text="AquaSwiss">
                            <span class="checkmark"></span>
                            AquaSwiss (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Armani" data-text="Armani">
                            <span class="checkmark"></span>
                            Armani (25)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Armani Exchange" data-text="Armani Exchange">
                            <span class="checkmark"></span>
                            Armani Exchange (19)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Breitling" data-text="Breitling">
                            <span class="checkmark"></span>
                            Breitling (2)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Bulova" data-text="Bulova">
                            <span class="checkmark"></span>
                            Bulova (29)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Cartier" data-text="Cartier">
                            <span class="checkmark"></span>
                            Cartier (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Casio" data-text="Casio">
                            <span class="checkmark"></span>
                            Casio (21)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Christian Van Sant" data-text="Christian Van Sant">
                            <span class="checkmark"></span>
                            Christian Van Sant (270)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Citizen" data-text="Citizen">
                            <span class="checkmark"></span>
                            Citizen (2)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Coach" data-text="Coach">
                            <span class="checkmark"></span>
                            Coach (87)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Diesel" data-text="Diesel">
                            <span class="checkmark"></span>
                            Diesel (42)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="DKNY" data-text="DKNY">
                            <span class="checkmark"></span>
                            DKNY (25)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Dogeared" data-text="Dogeared">
                            <span class="checkmark"></span>
                            Dogeared (3)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Ferrari" data-text="Ferrari">
                            <span class="checkmark"></span>
                            Ferrari (32)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Fossil" data-text="Fossil">
                            <span class="checkmark"></span>
                            Fossil (125)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Gucci" data-text="Gucci">
                            <span class="checkmark"></span>
                            Gucci (5)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Guess" data-text="Guess">
                            <span class="checkmark"></span>
                            Guess (80)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Hugo Boss" data-text="Hugo Boss">
                            <span class="checkmark"></span>
                            Hugo Boss (58)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Jean Paul Gaultier" data-text="Jean Paul Gaultier">
                            <span class="checkmark"></span>
                            Jean Paul Gaultier (42)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Jivago" data-text="Jivago">
                            <span class="checkmark"></span>
                            Jivago (150)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Jovial" data-text="Jovial">
                            <span class="checkmark"></span>
                            Jovial (31)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Juicy Couture" data-text="Juicy Couture">
                            <span class="checkmark"></span>
                            Juicy Couture (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Just Cavalli" data-text="Just Cavalli">
                            <span class="checkmark"></span>
                            Just Cavalli (57)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Kate Spade" data-text="Kate Spade">
                            <span class="checkmark"></span>
                            Kate Spade (18)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Kenneth Cole" data-text="Kenneth Cole">
                            <span class="checkmark"></span>
                            Kenneth Cole (36)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Lacoste" data-text="Lacoste">
                            <span class="checkmark"></span>
                            Lacoste (28)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Locman" data-text="Locman">
                            <span class="checkmark"></span>
                            Locman (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Longines" data-text="Longines">
                            <span class="checkmark"></span>
                            Longines (1)
                        </label>
                        <span class="showMore" data-target="1" style="color:cornflowerblue;cursor:pointer">Show more</span>
                    </div>
                    <div id="showMoreDiv1" class="showMoreDiv" data-page="1" style="display:none">
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Marc Jacobs" data-text="Marc Jacobs">
                            <span class="checkmark"></span>
                            Marc Jacobs (42)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Mathey Tissot" data-text="Mathey Tissot">
                            <span class="checkmark"></span>
                            Mathey Tissot (52)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Michael Kors" data-text="Michael Kors">
                            <span class="checkmark"></span>
                            Michael Kors (74)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Mont Blanc" data-text="Mont Blanc">
                            <span class="checkmark"></span>
                            Mont Blanc (2)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Movado" data-text="Movado">
                            <span class="checkmark"></span>
                            Movado (284)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Mulco" data-text="Mulco">
                            <span class="checkmark"></span>
                            Mulco (13)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Nina Ricci" data-text="Nina Ricci">
                            <span class="checkmark"></span>
                            Nina Ricci (15)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Nixon" data-text="Nixon">
                            <span class="checkmark"></span>
                            Nixon (3)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Obaku" data-text="Obaku">
                            <span class="checkmark"></span>
                            Obaku (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Oceanaut" data-text="Oceanaut">
                            <span class="checkmark"></span>
                            Oceanaut (224)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Olivia Burton" data-text="Olivia Burton">
                            <span class="checkmark"></span>
                            Olivia Burton (15)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Omega" data-text="Omega">
                            <span class="checkmark"></span>
                            Omega (10)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Pandora" data-text="Pandora">
                            <span class="checkmark"></span>
                            Pandora (148)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Rado" data-text="Rado">
                            <span class="checkmark"></span>
                            Rado (6)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Ray-Ban" data-text="Ray-Ban">
                            <span class="checkmark"></span>
                            Ray-Ban (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Raymond Weil" data-text="Raymond Weil">
                            <span class="checkmark"></span>
                            Raymond Weil (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Roberto Bianci" data-text="Roberto Bianci">
                            <span class="checkmark"></span>
                            Roberto Bianci (167)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Saint Laurent" data-text="Saint Laurent">
                            <span class="checkmark"></span>
                            Saint Laurent (3)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Seapro" data-text="Seapro">
                            <span class="checkmark"></span>
                            Seapro (125)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Sector" data-text="Sector">
                            <span class="checkmark"></span>
                            Sector (8)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Seiko" data-text="Seiko">
                            <span class="checkmark"></span>
                            Seiko (3)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Skagen" data-text="Skagen">
                            <span class="checkmark"></span>
                            Skagen (72)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Swarovski" data-text="Swarovski">
                            <span class="checkmark"></span>
                            Swarovski (65)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Swatch" data-text="Swatch">
                            <span class="checkmark"></span>
                            Swatch (31)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Swiss Army" data-text="Swiss Army">
                            <span class="checkmark"></span>
                            Swiss Army (5)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Tag Heuer" data-text="Tag Heuer">
                            <span class="checkmark"></span>
                            Tag Heuer (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Ted Baker" data-text="Ted Baker">
                            <span class="checkmark"></span>
                            Ted Baker (11)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Ted Lapidus" data-text="Ted Lapidus">
                            <span class="checkmark"></span>
                            Ted Lapidus (59)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Timex" data-text="Timex">
                            <span class="checkmark"></span>
                            Timex (5)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Tissot" data-text="Tissot">
                            <span class="checkmark"></span>
                            Tissot (96)
                        </label>
                        <span class="hideMore" data-target="2" style="color:cornflowerblue;cursor:pointer;padding-right: 114px;">Hide</span>
                        <span class="showMore" data-target="2" style="color:cornflowerblue;cursor:pointer">Show more</span>
                    </div>
                    <div id="showMoreDiv2" class="showMoreDiv" data-page="2" style="display:none">
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Tommy Hilfiger" data-text="Tommy Hilfiger">
                            <span class="checkmark"></span>
                            Tommy Hilfiger (74)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Tory Burch" data-text="Tory Burch">
                            <span class="checkmark"></span>
                            Tory Burch (2)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Toywatch" data-text="Toywatch">
                            <span class="checkmark"></span>
                            Toywatch (1)
                        </label>
                        <label class="container">
                            <input type="checkbox" class="brandFilter" data-type="Brand" data-value="Wenger" data-text="Wenger">
                            <span class="checkmark"></span>
                            Wenger (11)
                        </label>
                        <span class="hideMore" data-target="3" style="color:cornflowerblue;cursor:pointer;padding-right: 114px;">Hide</span>
                    </div>
                </div>
            </div>
            <div class="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing" style="display:none">
                <a id="colorFilter" class="filterToggle collapsed" data-toggle="collapse" href="fad.html#color" role="button" aria-expanded="false" aria-controls="color">
                    <div class="font-weight-bold bg-light-teal">COLOUR</div>
                </a>
                <div class="collapse checkboxes filterList" id="color">
                    <label class="container">
                        <input type="checkbox" class="colourFilter" data-type="Colour" data-value="Black" data-text="Black">
                        <span class="checkmark"></span>
                        Black (1)
                    </label>
                </div>
            </div>
            <div class="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing" style="display:none">
                <a id="sizeFilter" class="filterToggle collapsed" data-toggle="collapse" href="fad.html#size" role="button" aria-expanded="false" aria-controls="size">
                    <div class="font-weight-bold bg-light-teal">SIZE</div>
                </a>
                <div class="collapse checkboxes filterList" id="size">
                    <label class="container">
                        <input type="checkbox" class="sizeFilter" data-type="Size" data-value="One Size" data-text="One Size">
                        <span class="checkmark"></span>
                        One Size (1)
                    </label>
                </div>
            </div>
            <div class="mb-0 mb-sm-4  bg-light-teal p-3 guide wide-spacing" style="">
                <a id="pricefilter" class="filterToggle collapsed" data-toggle="collapse" href="fad.html#price" role="button" aria-expanded="false" aria-controls="price">
                    <div class="font-weight-bold bg-light-teal">PRICE</div>
                </a>
                <div class="collapse mt-3 filterList" id="price">
                    <div class="form-group">
                        <label for="formControlRange">R0</label>
                        <label class="float-right" for="formControlRange">R176 400</label>
                        <input type="range" class="priceFilter form-control-range" id="formControlRange" min="0" max="176400" step="100" value="0">
                    </div>
                    <div id="displayPrice">
                        R0
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
