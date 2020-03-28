$(document).ready(() => {
    const domain = "<?=empty($website) ? fff.com.vn : $website?>";
    const parrentURL = 'website-analysis.php?view=similar&action=result&domain=';
    const imgURL = 'https://files.fff.com.vn/f.php?url=';
    const getLastAnalysis = async () => {

        await $.ajax({
                url: `//localapi.trazk.com/webdata/websiteapi.php?task=getLastAnalysis&domain=${domain}`,
                type: "GET"
            })
            // .then(data => {console.log(data);JSON.parse(data)})
            .then(data => {
                let {
                    data: lastAnalysis,
                    website
                } = data.data.data;
                if (lastAnalysis) {
                    let {
                        description,
                        globalRanking,
                        highestTrafficCountryRanking,
                        icon,
                        imageLarge,
                        tags,
                        title
                    } = lastAnalysis;

                    let eleImg = $('.lastAnalysisImg');
                    let eleIcon = $('.lastAnalysisIcon');
                    let eleTitle = $('.lastAnalysisTitle');
                    let eleDesc = $('.lastAnalysisDesc');
                    let eleDomain = $('.lastAnalysisDomain');
                    let eleUrl = $('.lastAnalysisUrl');
                    let eleTags = $('.lastAnalysisTags');
                    let eleRank = $('.lastAnalysisRank');

                    eleImg.attr('src', imgURL + btoa(imageLarge));
                    eleIcon.attr('src', imgURL + btoa(icon));
                    if (!title) title = "WEBSITE NÀY CHƯA CẬP NHẬT TIÊU ĐỀ";
                    if (!description) description = "Website chưa cập nhập mô tả";
                    eleTitle.text(title);
                    eleDesc.text(description);
                    eleDomain.text(website);

                    eleUrl.attr('href', '#')
                    eleUrl.attr("data-type", 'website');
                    eleUrl.attr("data-input", website);
                    eleUrl.addClass("changeURL");
                    console.log('website: ', website);
                    if (tags !== null && tags.length > 0) {
                        eleTags.append(
                            '<i class="far fa-tag mr-1"></i><div class="font-bold mr-2">Từ khoá:</div>'
                        );
                        tags.forEach(tag => {
                            eleTags.append(
                                `<a href="https://fff.com.vn/ket-qua-phan-tich-tu-khoa/${tag}/" data-type="keyword" data-input="${tag}" class="changeURL border bg-light text-muted rounded-lg py-1 px-2 mr-2 my-1"><i class="far fa-search"></i> ${tag}</a>`
                            );
                        })
                    }
                    eleRank.html(`
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="d-flex no-block flex-row h-100 align-items-center">
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-square fa-stack-2x text-success"></i>
                                <i class="fas fa-globe-europe fa-stack-1x fa-inverse fa-1x"></i>
                            </span>
                            <div class="d-flex no-block flex-grow-1">
                                <span class="font-12 text-uppercase align-self-center">Quốc
                                    Tế</span>
                                <span class="similarGlobalRank h2 font-gg text-favorite ml-auto">
                                    #${numeral(globalRanking).format('0,0')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="d-flex no-block flex-row h-100 align-items-center">
                            <span class="fa-stack fa-2x">
                                <i class="fas fa-square fa-stack-2x text-danger"></i>
                                <i class="fas fa-star fa-stack-1x fa-inverse text-yellow fa-1x"></i>
                            </span>
                            <div class="d-flex no-block flex-grow-1">
                                <span class="font-12 text-uppercase align-self-center">Việt
                                    Nam</span>
                                <span class="similarCountryRank h2 font-gg text-favorite ml-auto">
                                    #${numeral(highestTrafficCountryRanking).format('0,0')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>`)
                } else {
                    console.log('lastAnalysis: ', data);
                }
            });
    };
    const getSimilarSites = async () => {
        await $.ajax({
            url: `//localapi.trazk.com/webdata/websiteapi.php?task=getLastAnalysisTable&limit=30&domain=${domain}`,
            type: "GET"
        })
        // .then(data => JSON.parse(data))
        .then(data => {
            let {
                data: lastAnalysis
            } = data.data;
            // console.log(lastAnalysis);
            $.each(lastAnalysis, (index, site) => {
                if (index == 0 || index == 10 || index == 20) {
                    $('#getSimilarSites').append(
                        '<div class="similarSites col-12 col-md-4"></div>')
                }
                $('#getSimilarSites .similarSites:last-child').append(
                    `<a class="m-0 my-md-2 mx-md-3 changeURL"  data-type="website"  data-input="${site.Domain}"  href="https://fff.com.vn/ket-qua-phan-tich-website/${site.Domain}/"><img class="p-1 mr-2 border rounded bg-secondary" src="https://files.fff.com.vn/f.php?url=${btoa(site.Favicon)}" />${site.Domain}</a>`
                );
            })
            $("#getSimilarSites").removeClass("is-loading");
        });
    };
    getLastAnalysis();
    getSimilarSites();

    $('.btnSubmitSimilar').click(() => {
        var similarInputSite = $('.similarInputSite').val().toLowerCase();
        similarInputSite = similarInputSite.replace(/http(s?):\/\//, '');
        if (similarInputSite != '') {
            window.location.href = `?view=traffic-website&action=result&domain=${similarInputSite}`


            // changeURL('website',similarInputSite);
        }
    });

    $('.similarInputSite').keypress(event => submitSimilar(event));

    submitSimilar = e => {
        var similarInputSite = $('.similarInputSite').val().toLowerCase();
        similarInputSite = similarInputSite.replace(/http(s?):\/\//, '');
        if (e.keyCode == 13 && similarInputSite != '') {
            window.location.href = `?view=traffic-website&action=result&domain=${similarInputSite}`
            // changeURL('website',similarInputSite);
        }
    };

    const getDomain = async () => {
        const result = await Swal.fire({
            title: 'Hãy nhập website để so sánh',
            width: 600,
            padding: '4em',
            html: `<input id="swal-input1" class="swal2-input" placeholder="Nhập website của bạn">` +
                `<div class="text-white font-16 bg-dark m-auto shadow-sm" style="height: 60px; width: 60px; line-height: 60px;border-radius: 60px">VS</div>` +
                `<input id="swal-input2" class="swal2-input" placeholder="Nhập website của đối thủ">`,
            focusConfirm: false,
            showCloseButton: true,
            position: 'top',
            customClass: {
                container: "pt-6"
            },
            confirmButtonText: 'So Sánh',
            onOpen: function () {
                $('#swal-input1').focus();
                $('#swal-input2').keypress(event => {
                    if (event.which == 13) {
                        $('.swal2-confirm').click();
                    }
                })
            },
            preConfirm: () => {
                if (document.getElementById('swal-input1').value == "" || document.getElementById('swal-input2').value == "") {
                    Swal.showValidationMessage(
                        `Vui lòng nhập đủ website`
                    )
                } else {
                    if (document.getElementById('swal-input1').value == document.getElementById('swal-input2').value) {
                        Swal.showValidationMessage(
                            `Hai website không được trùng`
                        )
                    }
                }

                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }

        })

        if (result.dismiss == undefined) {
            return result;

        }

    };
    // Change website
    $(".Compare").click(() => {
        getDomain().then(data => {
            if (data) {
                //location.href = `?action=compare&domain1=${data.value[0]}&domain2=${data.value[1]}`;
                changeURLCompare(data.value[0].toLowerCase(), data.value[1].toLowerCase());
            }
        });
    });

});