$(document).ready(() => {
  const language = {
    searchPlaceholder: 'Nhập từ khóa',
    processing: 'Đang xử lý...',
    loadingRecords: 'Đang tải...',
    emptyTable: 'Không có dữ liệu hiển thị',
    lengthMenu: 'Hiển thị: _MENU_ dòng mỗi trang',
    zeroRecords: 'Không tìm thấy dữ liệu',
    info: 'Hiển thị từ _START_ đến _END_ trong tổng _TOTAL_ dòng',
    infoEmpty: 'Hiển thị từ 0 đến 0 trong tổng 0 dòng',
    infoFiltered: '(lọc từ tổng số _MAX_ dòng)',
    search: 'Tìm kiếm:',
    paginate: {
      previous: 'Quay lại',
      next: 'Tiếp theo'
    }
  };
  //init datatable
  const initDatatable = function (select, tableOptions) {
    const table = $(`.${select}`).DataTable(tableOptions);
    $(table.table().header()).addClass('text-center');
    //reload click handle
    $(`.${select}`).click(function (event) {
      // $(event.target).addClass('fa-spin');
      $(`.${select}-container`).addClass('is-loading').block({
        overlayCSS: {
          backgroundColor: '#ccc',
          opacity: 0.8,
          zIndex: 1,
          cursor: 'wait'
        },
        message: null
      });
      // $(`.${select}`).DataTable().ajax.reload(() => {
      //   $(`.${select}`).removeClass("is-loading");
      //   $(`.${select} .dataTables_empty`).text("").addClass("empty-state");
      // });
    })
    return table;
  }
  // Trang Web Xã Hội 
  initDatatable(
    'getTrafficSocialTableDetail',
    {
      ajax: {
        url: `//localapi.trazk.com/webdata/websiteapi.php?task=getTrafficSocialTableDetail&domain=${localDomain}`,
        dataSrc: (json) => {
          // console.log(json);

          if (json && json.data && json.data.data && json.data.data.Data) {


            let { Data: newData } = json.data.data;
            
            $(`#DataTables_Table_0_wrapper .dataTables_scrollHead table.dataTable`).addClass('d-block').removeClass('d-none')
            $(`#DataTables_Table_0_processing.dataTables_processing`).css('display', 'none').addClass('d-none')
            return newData.Records.filter(item => item.Page != "grid.upgrade")
          }
          else {
            console.log('khanh');
            // $('.getTrafficSocialTableDetail thead').addClass('d-none')
            $('.getTrafficSocialTableDetail tbody tr .dataTables_empty').text("").addClass("empty-state");
            return [];
          }

        },
      },
      drawCallback: function (settings) {
        $('.getTrafficSocialTableDetail').removeClass('is-loading').unblock();
        $('.parent-getTrafficSocialTableDetail .getTrafficSocialTableDetail').find('.fa-spin').removeClass('fa-spin')
        // $('.parent-getTrafficSocialTableDetail ').find('.fa-spin').removeClass('fa-spin');

      },
      columns: [
        { title: 'Trang web', data: data => `<div class="text-left" style="width: 200px;word-wrap: break-word;"><a href="./?view=traffic-website&action=result&domain=${data.Page}">${data.Page}</a></div>` },
        { title: 'Lượt truy cập', data: data => (data.Visits == 0) ? `-` : `${numeral(data.Visits).format("0,0")}` },
        {
          title: 'Tỉ lệ truy cập',
          data: 'Share',
          render: (data, type, row) => `
                <div class="row align-items-center" style="width:150px">
                    <div class="col-4">${numeral(data).format('0.00%')}</div>
                    <div class="col">
                      <div class="progress rounded progress-custom w-70 my-auto">
                          <div class="progress-bar text-info" style="width: ${numeral(data).format('0%')}; height:14px;" role="progressbar"></div> 
                      </div>
                    </div>
                    <div class="col-4">
                      ${(row.Change == null) ? `  -` : (row.Change < 0) ? `<div class="negative text-red">${numeral(row.Change).format('0.00%').slice(1)}</div>` : `<div class="positive text-success">${numeral(data.Change).format('0.00%')}</div>`}
                    </div>
                </div>`
        },
      ],
      "ordering": true,
      language,
      info: false,
      autoWidth: true,
      searching: false,
      scrollY: "258px",
      scrollCollapse: true,
      paging: false,
      processing: true,
      initComplete: function (settings, json) {
        $(`.dataTables_scrollBody`).perfectScrollbar();
        $(`.dataTables_scrollHeadInner`).attr('style', 'width:100% !important;padding-right:0;border-bottom: 1px solid #ddd');
        $('.getTrafficSocialTableDetail .dataTables_empty').text("").addClass('empty-state');
      }
    }
  )
// Social Chanel
$.get(`//localapi.trazk.com/webdata/websiteapi.php?task=getTrafficSocialTableDetail&domain=${localDomain}`,function(res){

  let socialChanel = res.data.data.Data.Records.filter(item => item.Page != "grid.upgrade")
  let total = 0;
  for (const key in socialChanel) {
    total+=socialChanel[key].Visits
  }
  $('.socialChannel').html('').html(numeral(total).format('0,0a'))
  
})

  // Quảng Cáo Khu Vực Tương Tự

  $.get(`//localapi.trazk.com/webdata/facebook.php?task=findFanpageByDomain&domain=${localDomain}&userToken=${userToken}`, function (res) {
    let fbId = res.data.fbId;
    console.log('das',res);
    
    let logo = res.data.imageURI;
    let name = res.data.name;
    let iconBlue = '';
    if (res != null) {
      $('#bannerPageAds').removeClass('is-loading')
      if (res.data.verification == "blue_verified") {
        iconBlue =  rootURL + "/dist/images/check.png";
      } else {
        iconBlue = " ";
      }
      let html = `
        <div class="imgPageAds d-flex align-items-end"
          style="--cover-photo-uri: url('${res.data.pageCoverPhoto}');background-size: contain;height: 420px;width: 100%;background-position: center;background-repeat: no-repeat;background-image:linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .8)), var(--cover-photo-uri);padding: 20px!important;">
                    <div class="p-2 mb-4 rounded-circle bg-primary" style="width:115px;height:115px;background-image: url('${res.data.imageURI}');background-size: cover;background-position: center;background-repeat: no-repeat;border:2px solid white"></div>
                    <div class="p-2 mb-2 mb-lg-5 pl-3">
                    <div class="font-16 font-weight-bold text-white">${res.data.name} <img class="ml-n1" src="${iconBlue}" style="width:20px">
                              
                    </div>
                    <div class="font-12 text-white">@${res.data.pageAlias}</div>
                    <div class="font-12 text-white">${res.data.category} - <span>${numeral(res.data.likes).format("0,0")} likes</span></div>
                    </div>
                    <div class="ml-auto mb-5">
                    <div class="bg-white" style="border-radius: 5px;padding: 5px 10px 5px 10px;">
                    <div class="font-12 text-dark p-5"><i class="far fa-flag-alt"></i> Trang được tạo <span>${moment(res.data.pageCreationDate).format('MMMM DD YYYY')}</span><div>
                    </div>
                    </div>
                  
                   
        </div>
        `;
      $('#bannerPageAds').append(html)
      $.get(`//localapi.trazk.com/webdata/facebook.php?task=getAdsInFanpage&fbId=${fbId}&userToken=${userToken}`, function (res) {
        let data = res.data.ads;
        if (data != null) {
          for (const key in data) {

            if (data[key].adsType == "card") {
              let fb = '';
              let ins = '';
              let fb_netword = '';
              let mes = '';
              for (const icon in data[key].publisherPlatform) {
                if (data[key].publisherPlatform[icon] == "facebook") {
                  fb = rootURL + "/dist/images/facebook.png"
                }
                if (data[key].publisherPlatform[icon] == "instagram") {
                  ins =  rootURL + "/dist/images/instagram.png"
                }
                if (data[key].publisherPlatform[icon] == "audience_network") {
                  fb_netword =  rootURL + "/dist/images/audience_network.png";
                }
                if (data[key].publisherPlatform[icon] == "messenger") {
                  mes =  rootURL + "/dist/images/messenger.png";
                }
              }
              let id = data[key].creation_time
              let date = moment(data[key].creation_time * 1000).format('ll', 'MMMM DD,YYYY');
              for (const item in data[key].cards) {
                if (data[key].cards[item].caption == null) {
                  $('.card-caption-social').addClass('d-none')
                }
                if (data[key].cards[item].link_description == null) {
                  $('.card-link-description-social').addClass('d-none')
                }
                if (data[key].cards[item].title == null) {
                  $('.card-title-social').addClass('d-none')
                }
                let html = `
              <div class="col-12 col-lg-4 mb-3">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-12 pl-2 mb-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <i class="fad fa-circle text-success"></i> Active
                                            </div>
                                            <div class="d-flex no-block">
                                                <div class="mr-auto ">
                                                    <div>Bắt đầu chạy ngày ${date}</div>
                                                    <div class="text-muted">ID: <span class="creation_time">${id}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img class="iconFb" src="${fb}" style="width:20px">
                                                    <img class="iconIn" src="${ins}" style="width:20px">
                                                    <img class="iconFbN" src="${fb_netword}" style="width:20px">
                                                    <img class="iconM" src="${mes}" style="width:20px">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  
                                    <div class="row rounded">
                                        <div class="col-12 mb-0">
                                            <div class="d-flex mb-3">
                                                <div style="width:35px;height:35px;" class="mt-3 ml-3">
                                                    <img class="rounded-circle"
                                                        src="${logo}"
                                                        style="width:100%" alt="">
                                                </div>
                                                <div class="mt-3 ml-3">
                                                    <div class="font-12 font-weight-bold">${name}</div>
                                                    <div class="font-10 font-weight-500">Sponsored</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-11 px-2 font-weight-400 text-hidden-body">${data[key].cards[item].body}
                                                </div>
                                                <div class="w-100">
                                                    <img class="w-100"
                                                        src="${data[key].cards[item].resized_image_url}"
                                                        alt="">
                                                </div>
                                                <div class="px-2 p-1">
                                                    <div class="d-flex mb-3">
                                                        <div class="mr-auto p-2 w-md-70">
                                                            <a class="text-dark parent-text-underlines" href="${data[key].cards[item].link_url}">
                                                                <div class="font-11 text-underlines text-hidden card-caption-social">${data[key].cards[item].caption}</div>
                                                                <div class="font-10 text-hidden text-underlines card-link-description-social">${data[key].cards[item].link_description}</div>
                                                                <div class="font-9 text-uppercase text-hidden text-underlines card-title-social">${data[key].cards[item].title}</div>
                                                            </a>
                                                        </div>
                                                        <div class="p-2 mt-3 w-md-30">
                                                            <a href="${data[key].cards[item].link_url}">
                                                                <button class="btn btn-secondary text-capitalize"
                                                                    style="font-size:10px!important;padding:5px 10px!important;">${data[key].cards[item].cta_text}</button>
                                                            </a>
                                                        </div>
  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  
                                </div>
                            </div>
            `;
                $('.reportFb').append(html)
              }
            }

            if (data[key].adsType == "post") {
              let images = data[key].post.images[0].resized_image_url
              let fb = '';
              let ins = '';
              let fb_netword = '';
              let mes = '';
              for (const icon in data[key].publisherPlatform) {
                if (data[key].publisherPlatform[icon] == "facebook") {
                  fb = "./dist/images/facebook.png"
                }
                if (data[key].publisherPlatform[icon] == "instagram") {
                  ins = './dist/images/instagram.png'
                }
                if (data[key].publisherPlatform[icon] == "audience_network") {
                  fb_netword = "./dist/images/audience_network.png";
                }
                if (data[key].publisherPlatform[icon] == "messenger") {
                  mes = "./dist/images/messenger.png";
                }
              }
              let id = data[key].creation_time;
              let date = moment(data[key].creation_time * 1000).format('ll', 'MMMM DD,YYYY');
              let content = data[key].post.body.markup.__html;
              let empty = "";
              if (data[key].post.link_description != null) {
                empty = data[key].post.link_description
              } else {
                empty = "";
              }
              let html = `
              <div class="col-12 col-lg-4 mb-3">
                                <div class="bg-white shadow-sm rounded">
                                    <div class="row border-bottom m-0 py-2">
                                        <div class="col-12 pl-2 mb-0">
                                            <div class="text-capitalize font-weight-bold">
                                                <i class="fad fa-circle text-success"></i> Active
                                            </div>
                                            <div class="d-flex no-block">
                                                <div class="mr-auto ">
                                                    <div>Bắt đầu chạy ngày ${date}</div>
                                                    <div class="text-muted">ID: <span class="creation_time">${id}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img class="iconFb" src="${fb}" style="width:20px">
                                                    <img class="iconIn" src="${ins}" style="width:20px">
                                                    <img class="iconFbN" src="${fb_netword}" style="width:20px">
                                                    <img class="iconM" src="${mes}" style="width:20px">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  
                                    <div class="row rounded">
                                        <div class="col-12 mb-0">
                                            <div class="d-flex mb-3">
                                                <div style="width:35px;height:35px;" class="mt-3 ml-3">
                                                    <img class="rounded-circle"
                                                        src="${logo}"
                                                        style="width:100%" alt="">
                                                </div>
                                                <div class="mt-3 ml-3">
                                                    <div class="font-12 font-weight-bold">${name}</div>
                                                    <div class="font-10 font-weight-500">Sponsored</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-11 px-2 font-weight-400 text-hidden-body">${content}</div>
                                                <div class="w-100">
                                                    <img class="w-100 pt-3"
                                                        src="${images}"
                                                        alt="">
                                                </div>
                                                <div class="px-2 p-1">
                                                    <div class="d-flex mb-3">
                                                        <div class="mr-auto p-2 w-md-70">
                                                          <a class="text-dark parent-text-underlines" href="${data[key].post.link_url}">
                                                            <div class="font-11 text-underlines text-hidden post-caption-social">${data[key].post.caption}</div>
                                                            <div class="font-10 text-hidden text-underlines post-link-description-social ">${empty}</div>
                                                            <div class="font-9 text-uppercase text-hidden text-underlines post-title-social">${data[key].post.title}</div>
                                                          </a>
                                                        </div>
                                                        <div class="p-2 mt-3 w-md-30">
                                                          <a href="${data[key].post.link_url}">
                                                            <button class="btn btn-secondary text-capitalize"
                                                            style="font-size:10px!important;padding:5px 10px!important;">${data[key].post.cta_text}</button>
                                                          </a>
                                                        </div>
  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  
                                </div>
                            </div>
            `;
              $('.reportFb').append(html)
            }
          }
        } else {
          console.log('data');
        }
      })
    } else {
      console.log('khsdas');
    }
  })
  // Quảng Cáo Khu Vực Tương Tự
})