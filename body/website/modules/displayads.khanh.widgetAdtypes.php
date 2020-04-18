
    <div class="bg-white shadow-sm rounded Ads-Type">
        <div class="row border-bottom m-0 py-2">
            <div class="col-auto d-flex no-block align-items-center mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24" version="1.1" class="svg-icon text-primary mb-1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                        <path d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z" id="Mask" fill="#000000" opacity="0.3"></path>
                        <path d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z" id="Path-107" fill="#000000"></path>
                    </g>
                </svg>
            </div>
            <div class="col-auto pl-0">
                <div class="text-capitalize font-weight-bold"><?= _("Loại Quảng Cáo") ?></div>
                <div class="text-muted similarDates font-10">03/2019 - 02/2020</div>
            </div>
            <div class="ml-auto d-flex no-block align-items-center pr-3">
                <a class="similarReloadTask text-muted" data-task="adTypeOverview" href="javascript:;"><i class="fal fa-sync"></i></a>
            </div>
        </div>
        <div class="mt-3 parent-adTypeOverview" id="Parent-adTypeOverview">
            <div class="list-adtypes  d-flex flex-row" style="min-height: 260px">
                <div class="adtypes-chart ml-4">
                    <div>
                        <div class="">
                            <div class="a ">
                                <div class="frames">
                                    <div class="frames-all"></div>
                                    <div class="frames-fill" id="fill-blue"></div>
                                </div>
                            </div>
                            <div class="adtypes-percent"><span class="count-percent-blue"></span></div>
                        </div>
                        <div class="img-type-far">
                            <div class="img-types">Image</div>
                        </div>
                        <div class="text-type-far">
                            <div class="count-image-types" id="count-img-type"></div>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------part ---1-------->
                <div class="adtypes-chart">
                    <div>
                        <div class="">
                            <div class="a ">
                                <div class="frames">
                                    <div class="frames-all bg-orange-full"></div>
                                    <div class="frames-fill bg-orange-fill" id="fill-orange"></div>
                                </div>
                            </div>
                            <div class="adtypes-percent"><span class="count-percent-orange"> </span></div>
                        </div>
                        <div class="img-type-far">
                            <div class="img-types">HTML</div>
                        </div>
                        <div class="text-type-far">
                            <div class="count-image-types" id="count-html-type"></div>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------part ---2-------->
                <div class="adtypes-chart">
                    <div>
                        <div class="">
                            <div class="a ">
                                <div class="frames">
                                    <div class="frames-all bg-green-full"></div>
                                    <div class="frames-fill bg-green-fill" id="fill-green"></div>
                                </div>
                            </div>
                            <div class="adtypes-percent"><span class="count-percent-green"></span></div>
                        </div>
                        <div class="img-type-far">
                            <div class="img-types">Text</div>
                        </div>
                        <div class="text-type-far">
                            <div class="count-image-types" id="count-text-type"></div>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------part ---3-------->


            </div>
        </div>

    </div>