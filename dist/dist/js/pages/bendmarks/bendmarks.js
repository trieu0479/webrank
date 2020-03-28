
jQuery(document).ready(function($) {

	numeral.locale("vi");
   
	window.getAdwordsMarketVietnamSearchChart = function getAdwordsMarketVietnamSearchChart(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=search&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){
			
			var option = { 
				xAxis: {
					type : 'category',
					data: res.data.nganhnghe,
					
					axisLabel: {						
						textStyle: {
							color: '#666',
							
						},
						fontFamily: 'Arial',
						fontSize: 11,
						lineHeight:22,
						width:'100%', 
						interval: 0, 
					},
					
					axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				yAxis: {
					type: 'value',
					 axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				series: [{
					name: 'CPC',
					data: res.data.cpc,
					type: 'bar',
					itemStyle: {
						color: '#1dd1a1',
						barBorderColor: '#1dd1a1'
					},
					label: {
						show: true,
						position: 'top',
						color: '#1dd1a1',
						formatter: function(params) {
							return params.value.toLocaleString('en-US');
						},
					},
					barMaxWidth: '55%'
				}]
			};

			var myChart = echarts.init(document.getElementById('adwordsMarketVietnamSearchCPCChart'));
			myChart.setOption(option);
			new ResizeSensor($('#adwordsMarketVietnamSearchCPCChart'), () => myChart.resize());
			 
			 var option = {  
				xAxis: {
					type : 'category',
					data: res.data.nganhnghe,
					
					axisLabel: {						
						textStyle: {
							color: '#666',
							
						},
						fontFamily: 'Arial',
						fontSize: 11,
						lineHeight:22,
						width:'100%', 
						interval: 0, 
					},
					
					axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				yAxis: {
					type: 'value',
					 axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				series: [{
					name: 'CTR',
					data: res.data.ctr,
					type: 'line',
					symbolSize: 10,
					smooth: true,
					itemStyle: {
						color: '#1dd1a1',
						barBorderColor: '#1dd1a1'
					},
					label: {
						show: true,
						position: 'top',
						color: '#1dd1a1',
						formatter: function(params) {
							return params.value.toLocaleString('en-US')+" %";
						},
					}
				}]
			};

			var myChart1 = echarts.init(document.getElementById('adwordsMarketVietnamSearchCTRChart'));
			myChart1.setOption(option);
			new ResizeSensor($('#adwordsMarketVietnamSearchCTRChart'), () => myChart1.resize());

		});
	}
	
	window.getAdwordsMarketVietnamGDNChart = function getAdwordsMarketVietnamGDNChart(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=gdn&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){
			
			var option = { 
				xAxis: {
					type : 'category',
					data: res.data.nganhnghe,
					
					axisLabel: {						
						textStyle: {
							color: '#797979',
							
						},
						fontFamily: 'Arial',
						fontSize: 11,
						lineHeight:22,
						width:'100%',
						interval: 0, 
					},
					
					axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				yAxis: {
					type: 'value',
					 axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				series: [{
					name: 'CPC',
					data: res.data.cpc,
					type: 'bar',
					itemStyle: {
						color: '#54a0ff',
						barBorderColor: '#54a0ff'
					},
					label: {
						show: true,
						position: 'top',
						color: '#54a0ff',
						formatter: function(params) {
							return params.value.toLocaleString('en-US');
						},
                    },
					barMaxWidth: '55%'
				}]
			};

			var myChart = echarts.init(document.getElementById('adwordsMarketVietnamGDNCPCChart'));
			myChart.setOption(option);

			new ResizeSensor($('#adwordsMarketVietnamGDNCPCChart'), () => myChart.resize());
			 
			 var option = {
				xAxis: {
					type : 'category',
					data: res.data.nganhnghe,
					
					axisLabel: {						
						textStyle: {
							color: '#797979',
							
						},
						fontFamily: 'Arial',
						fontSize: 11,
						lineHeight:22,
						width:'100%',
						interval: 0, 
					},
					
					axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				yAxis: {
					type: 'value',
					 axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				series: [{
					name: 'CTR',
					data: res.data.ctr,
					type: 'line',
					symbolSize: 10,
					smooth: true,
					itemStyle: {
						color: '#54a0ff',
						width: 5,
					},
					
					label: {
						show: true,
						position: 'top',
						color: '#54a0ff',
						formatter: function(params) {
							return params.value.toLocaleString('en-US')+" %";
						},
					}
				}]
			};

			 var myChart1 = echarts.init(document.getElementById('adwordsMarketVietnamGDNCTRChart'));
  	         myChart1.setOption(option);


			new ResizeSensor($('#adwordsMarketVietnamGDNCTRChart'), () => myChart1.resize());
		});
	}
	
	window.getAdwordsMarketVietnamYoutubeChart = function getAdwordsMarketVietnamYoutubeChart(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=youtube&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){ 

			var option = { 
				xAxis: {
					type : 'category',
					data: res.data.nganhnghe,
					
					axisLabel: {						
						textStyle: {
							color: '#797979',
							
						},
						fontFamily: 'Arial',
						fontSize: 11,
						lineHeight:22,
						width:'100%',
						interval: 0,
					},
					
					axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				yAxis: {
					type: 'value',
					 axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
					  axisLabel: {
						color:'#797979',
					},
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				series: [{
					name: 'CPM',
					data: res.data.cpm,
					type: 'bar',
					itemStyle: {
						color: '#ff4d4d',
						barBorderColor: '#ff4d4d'
					},
					label: {
						show: true,
						position: 'top',
						color: '#ff4d4d',
						formatter: function(params) {
							return params.value.toLocaleString('en-US');
						},
					},
					barMaxWidth: '55%'
				}]
			};

			var myChart = echarts.init(document.getElementById('adwordsMarketVietnamYoutubeCPMChart'));
  	        myChart.setOption(option);
			new ResizeSensor($('#adwordsMarketVietnamYoutubeCPMChart'), () => myChart.resize());

			var option = { 
				xAxis: {
					type : 'category',
					data: res.data.nganhnghe,
					
					axisLabel: {						
						textStyle: {
							color: '#797979',
							
						},
						fontFamily: 'Arial',
						fontSize: 11,
						lineHeight:22,
						width:'100%',
						interval: 0, 
					},
					
					axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
				},
				yAxis: {
					type: 'value',
					 axisLine: {
                        show: false,
                        lineStyle: {
                        color: '#CCC'
						},
					 },
					 axisLabel: {
						color:'#797979',
					},
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				series: [{
					name: 'CPV',
					data: res.data.cpv,
					type: 'line',
					symbolSize: 10,
					smooth: true,
					itemStyle: {
						color: '#ff4d4d',
						barBorderColor: '#ff4d4d'
					},
					
					label: {
						show: true,
						position: 'top',
						color: '#ff4d4d',
						formatter: function(params) {
							return params.value.toLocaleString('en-US');
						},
                    }, 
				}]
			};

			var myChart1 = echarts.init(document.getElementById('adwordsMarketVietnamYoutubeCPVChart'));
			myChart1.setOption(option);
			new ResizeSensor($('#adwordsMarketVietnamYoutubeCPVChart'), () => myChart1.resize());


		});
	}

	window.getAdwordsMarketVietnamSearch = function getAdwordsMarketVietnamSearch(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnam.php?type=search&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){
			$(".SearchMarket .cpc").html(res.cpc);
			$(".SearchMarket .ctr").html(res.ctr);
			$(".SearchMarket .invalidclick").html(res.invalidclick);
		});
	}	
	window.getAdwordsMarketVietnamGDN = function getAdwordsMarketVietnamGDN(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnam.php?type=gdn&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){
			$(".GDN .cpc").html(res.cpc);
			$(".GDN .ctr").html(res.ctr);
			$(".GDN .cpm").html(res.cpm);
		});
	}
	window.getAdwordsMarketVietnamYoutube = function getAdwordsMarketVietnamYoutube(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnam.php?type=youtube&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){
			$(".Youtube .cpc").html(res.cpc);
			$(".Youtube .cpv").html(res.cpv);
			$(".Youtube .cpm").html(res.cpm);
		});
	}
	window.getAdwordsMarketVietnamMobilePC = function getAdwordsMarketVietnamMobilePC(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnam.php?type=mobilepc&startDate="+startDate+"&endDate="+endDate; 
		$.getJSON(url,function(res){
			
			$(".MobilePC .chiphi .mobile").html(res.chiphiMobile);
			$(".MobilePC .chiphi .pc").html(res.chiphiPc);
			$(".MobilePC .cpc .mobile").html(res.cpcMobile);
			$(".MobilePC .cpc .pc").html(res.cpcPc);
			$(".MobilePC .ctr .mobile").html(res.ctrMobile);
			$(".MobilePC .ctr .pc").html(res.ctrPc);
			$(".MobilePC .invalidClick .mobile").html(res.invalidClickMobile);
			$(".MobilePC .invalidClick .pc").html(res.invalidClickPc);
			$(".MobilePC .conversion .pc").html(res.conversionPC);
			$(".MobilePC .conversion .mobile").html(res.conversionMobile);
		});
	}
	
	window.getAdwordsMarketVietnamDeviceChart = function getAdwordsMarketVietnamDeviceChart(startDate,endDate){
		const url = "//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=deviceMobileCpc&startDate="+startDate+"&endDate="+endDate;

		$.getJSON(url,function(res){

			if(res.data)
			{
				$("#adwordsMarketVietnamMobileCPCChart").removeClass("empty-state")
				var option = {
					xAxis: {
						type : 'category',
						data: res.data.nganhnghe,
						
						axisLabel: {						
							textStyle: {
								color: '#444',
								
							},
							fontFamily: 'Arial',
							fontSize: 11,
							lineHeight:22,
							width:'100%',
							interval: 0, 
						},
						
						axisLine: {
							show: false,
							lineStyle: {
							color: '#CCC'
							},
						 },
					},
					yAxis: {
						type: 'value',
						 axisLine: {
							show: false,
							lineStyle: {
							color: '#CCC'
							},
						 },
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					series: [{
						name: 'CPC - Di Động',
						data: res.data.cpc,
						type: 'bar',
						itemStyle: {
							color: '#5d78ff',
							barBorderColor: '#5d78ff'
						},
						label: {
							show: true,
							position: 'top',
							color: '#5d78ff',
							formatter: function(params) {
								return params.value.toLocaleString('en-US');
							},
						}
					}]
				};
	
				 var myChart = echarts.init(document.getElementById('adwordsMarketVietnamMobileCPCChart'));
				   myChart.setOption(option);
			}

			else
			{
				echarts.dispose(document.getElementById('adwordsMarketVietnamMobileCPCChart'));
				$("#adwordsMarketVietnamMobileCPCChart").addClass("empty-state")
			}


			
		});

		url = "//fff.com.vn/api/getadwordsmarketvietnamchart.php?type=devicePCCpc&startDate="+startDate+"&endDate="+endDate;
		$.getJSON(url,function(res){

			if(res.data)
			{
				$("#adwordsMarketVietnamPCCPCChart").removeClass("empty-state");
				var option = {
					xAxis: {
						type : 'category',
						data: res.data.nganhnghe,
						
						axisLabel: {						
							textStyle: {
								color: '#444',
								
							},
							fontFamily: 'Arial',
							fontSize: 11,
							lineHeight:22,
							width:'100%',
						},
						
						axisLine: {
							show: false,
							lineStyle: {
							color: '#CCC'
							},
						},
					},
					yAxis: {
						type: 'value',
						axisLine: {
							show: false,
							lineStyle: {
							color: '#CCC'
							},
						},
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					series: [{
						name: 'CPC - Máy Tính',
						data: res.data.cpc,
						type: 'line',
						itemStyle: {
							color: '#5d78ff',
							barBorderColor: '#5d78ff'
						},
						label: {
							show: true,
							position: 'top',
							color: '#5d78ff',
							formatter: function(params) {
								return params.value.toLocaleString('en-US');
							},
						}
					}]
				};

				var myChart = echarts.init(document.getElementById('adwordsMarketVietnamPCCPCChart'));
				myChart.setOption(option);
			}

			else
			{
				echarts.dispose(document.getElementById('adwordsMarketVietnamPCCPCChart'));
				$("#adwordsMarketVietnamPCCPCChart").addClass("empty-state");
			}
		});
	}

	window.updatedateRange = function updatedateRange(startDateMoment,endDateMoment){
		var start = moment(startDateMoment, 'DD/MM/YYYY');
		var end   = moment(endDateMoment, 'DD/MM/YYYY');
		var range = moment.duration(end.diff(start)).asDays();
		$(".dateRange").html(" (Dữ liệu trong " + range +" ngày. Từ "+ startDateMoment + " đến "+ endDateMoment + ")");
		$(".songayReport").html( range +" ngày");
	}


	
// ------------------------------------------------------------------------------------------------------------------------------------------------
	// update 03/10/2019

	

	//
	

	window.getLocalData = async function getLocalData() {
		return await localStorage.getItem('report_data');
	}
	
	window.loadReportData = async function loadReportData() {
		return await $.get(`//localapi.trazk.com/webdata/market.php?task=googleConstantData`) ;
	}
	
	window.syncData = async function syncData() {
		return await $.get(`//localapi.trazk.com/webdata/market.php?task=googleConstantData`) ;
	}

	//

	window.rank = function rank(){
		let url = `//localapi.trazk.com/webdata/market.php?task=rank`;
		$.get(url,function(data){   
			data.data.data.forEach(ele => {
				if(ele.id == "VN")
					data = ele;
			});
			
			data = data.datapoints;
			let total_search_volume = data.total_search_volume;
			let average_cpc = data.average_cpc;

			$(".total_search_volume").text(total_search_volume.replace("m"," triệu")).removeClass("is-loading"); 
			$(".average_cpc").html(numeral(average_cpc*23000).format("0,0") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); 
		})
	}

	window.googleConstantData = function googleConstantData(data){
			// console.log(data);
			data = data.data.non_api_datapoints.data[202];
			data = data.datapoints;
			

			let payment_methods = data.global_payments_country_breakdown;  
			let legend_payment_methods = [];
			payment_methods.forEach(ele => {
				legend_payment_methods.push(ele.name);
			}); 
			let option = { 
				// legend: {
				// 	// orient: 'vertical',
				// 	// x: 'left',
				// 	top: "0%", 
				// 	data:legend_payment_methods
				// },
				series: [
					{ 
						name: "Phương thức thanh toán",
						type:'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
								formatter: '{text|{b}}\n{value|{d}%}',
								rich: {
									text: {
										color: "#666",
										fontSize: 12,
										fontFamily: 'Arial',
										align: 'center',
										verticalAlign: 'middle',
										padding: 5
									},
									value: {
										color: "#8693F3",
										fontSize: 24,
										align: 'center',
										verticalAlign: 'middle',
									},
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: payment_methods
					}
				]
			};  
			let myChartpayment_methods = echarts.init(document.getElementById('payment-methods'),"light");
  	        myChartpayment_methods.setOption(option);
			new ResizeSensor($('#payment-methods'), () => myChartpayment_methods.resize()); 
			$('#payment-methods').removeClass("is-loading"); 

			let android_and_ios = data.android_and_ios;
			let dataChart_android_and_ios = [];
			let legend_android_and_ios = [];
			android_and_ios.elements.forEach(ele => {
				if(ele[0]=="Other")
					ele[0] = "Khác"; 

				let temp = {
					name: ele[0],
					value: ele[1],
				}

				legend_android_and_ios.push(ele[0]);
				dataChart_android_and_ios.push(temp)
			});    
			option = { 
				// legend: {
				// 	// orient: 'vertical',
				// 	// x: 'right',
				// 	top: "0%",
				// 	// right: '0%',
				// 	// bottom: "0%",
				// 	data: legend_android_and_ios,
				// },
				series: [
					{ 
						name: "Sử dụng Android và iOS",
						type:'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
								formatter: '{text|{b}}\n{value|{d}%}',
								rich: {
									text: {
										color: "#666",
										fontSize: 12,
										fontFamily: 'Arial',
										align: 'center',
										verticalAlign: 'middle',
										padding: 5
									},
									value: {
										color: "#8693F3",
										fontSize: 24,
										align: 'center',
										verticalAlign: 'middle',
									},
								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: dataChart_android_and_ios
					}
				]
			};  
			let myChartandroid_and_ios = echarts.init(document.getElementById('android_and_ios'),"light");
  	        myChartandroid_and_ios.setOption(option);
			new ResizeSensor($('#android_and_ios'), () => myChartandroid_and_ios.resize());
			$('#android_and_ios').removeClass("is-loading"); 

			let broadband_penetration = data.broadband_penetration; 

			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#389af4',
							shadowColor: '#389af4',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(broadband_penetration.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#389af4'
								}
							}
						},
					}, {
						value: 100-numeral(broadband_penetration.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#dfeaff"
							},
							emphasis: {
								color: "#dfeaff"
							}
						}
					}]
				}    
			}

			let myChartbroadband_penetration = echarts.init(document.getElementById('broadband_penetration'),"light");
  	        myChartbroadband_penetration.setOption(option);
			new ResizeSensor($('#broadband_penetration'), () => myChartbroadband_penetration.resize());
			$('#broadband_penetration').removeClass("is-loading"); 

			let internet_users_percentage = data.internet_users_percentage; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#ff8c37',
							shadowColor: '#ff8c37',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(internet_users_percentage.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#ff8c37'
								}
							}
						},
					}, {
						value: 100-numeral(internet_users_percentage.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#ffdcc3"
							},
							emphasis: {
								color: "#ffdcc3"
							}
						}
					}]
				}    
			} 
			let myChartinternet_users_percentage = echarts.init(document.getElementById('internet_users_percentage'),"light");
  	        myChartinternet_users_percentage.setOption(option);
			new ResizeSensor($('#internet_users_percentage'), () => myChartinternet_users_percentage.resize());
			$('#internet_users_percentage').removeClass("is-loading"); 

			let frequency_of_internet_use = data.frequency_of_internet_use; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#a181fc',
							shadowColor: '#a181fc',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(frequency_of_internet_use.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#a181fc'
								}
							}
						},
					}, {
						value: 100-numeral(frequency_of_internet_use.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#e3d9fe"
							},
							emphasis: {
								color: "#e3d9fe"
							}
						}
					}]
				}    
			} 
			let myChartfrequency_of_internet_use = echarts.init(document.getElementById('frequency_of_internet_use'),"light");
  	        myChartfrequency_of_internet_use.setOption(option);
			new ResizeSensor($('#frequency_of_internet_use'), () => myChartfrequency_of_internet_use.resize());
			$('#frequency_of_internet_use').removeClass("is-loading"); 


			let daily_video_views_by_smartphone = data.daily_video_views_by_smartphone; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#fd6f97',
							shadowColor: '#fd6f97',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(daily_video_views_by_smartphone.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#fd6f97'
								}
							}
						},
					}, {
						value: 100-numeral(daily_video_views_by_smartphone.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#fed4e0"
							},
							emphasis: {
								color: "#fed4e0"
							}
						}
					}]
				}    
			} 
			let myChartdaily_video_views_by_smartphone = echarts.init(document.getElementById('daily_video_views_by_smartphone'),"light");
  	        myChartdaily_video_views_by_smartphone.setOption(option);
			new ResizeSensor($('#daily_video_views_by_smartphone'), () => myChartdaily_video_views_by_smartphone.resize()); 
			$('#daily_video_views_by_smartphone').removeClass("is-loading"); 


			let learn_about_product_online = data.learn_about_product_online; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#ffc257',
							shadowColor: '#ffc257',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(learn_about_product_online.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#ffc257'
								}
							}
						},
					}, {
						value: 100-numeral(learn_about_product_online.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#ffedcc"
							},
							emphasis: {
								color: "#ffedcc"
							}
						}
					}]
				}    
			} 
			let myChartlearn_about_product_online = echarts.init(document.getElementById('learn_about_product_online'),"light");
  	        myChartlearn_about_product_online.setOption(option);
			new ResizeSensor($('#learn_about_product_online'), () => myChartlearn_about_product_online.resize());
			$('#learn_about_product_online').removeClass("is-loading"); 


			let people_first_hear_about_product_via_advertising = data.people_first_hear_about_product_via_advertising; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#ffc257',
							shadowColor: '#ffc257',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(people_first_hear_about_product_via_advertising.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#ffc257'
								}
							}
						},
					}, {
						value: 100-numeral(people_first_hear_about_product_via_advertising.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#ffedcc"
							},
							emphasis: {
								color: "#ffedcc"
							}
						}
					}]
				}    
			} 
			let myChartpeople_first_hear_about_product_via_advertising = echarts.init(document.getElementById('people_first_hear_about_product_via_advertising'),"light");
  	        myChartpeople_first_hear_about_product_via_advertising.setOption(option);
			new ResizeSensor($('#people_first_hear_about_product_via_advertising'), () => myChartpeople_first_hear_about_product_via_advertising.resize());
			$('#people_first_hear_about_product_via_advertising').removeClass("is-loading"); 


			let exclusive_online_research = data.exclusive_online_research; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#ffc257',
							shadowColor: '#ffc257',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(exclusive_online_research.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#ffc257'
								}
							}
						},
					}, {
						value: 100-numeral(exclusive_online_research.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#ffedcc"
							},
							emphasis: {
								color: "#ffedcc"
							}
						}
					}]
				}    
			} 
			let myChartexclusive_online_research = echarts.init(document.getElementById('exclusive_online_research'),"light");
  	        myChartexclusive_online_research.setOption(option);
			new ResizeSensor($('#exclusive_online_research'), () => myChartexclusive_online_research.resize());
			$('#exclusive_online_research').removeClass("is-loading"); 

			let use_of_search_engine_purchase_decision = data.use_of_search_engine_purchase_decision; 
			option = {
				backgroundColor: "#fff", 
				series: { 
					type: 'pie',
					clockWise: true,
					radius: [60, 70],
					itemStyle:  {
						normal: {
							color: '#ffc257',
							shadowColor: '#ffc257',
							shadowBlur: 0,
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
						}
					},
					hoverAnimation: false, 
					data: [{
						value: numeral(use_of_search_engine_purchase_decision.value).format("0"),
						label: {
							normal: {
								formatter: function(params){
									return params.value+'%';
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '20',
									fontWeight: 'bold',
									color: '#ffc257'
								}
							}
						},
					}, {
						value: 100-numeral(use_of_search_engine_purchase_decision.value).format("0"),
						name: 'invisible',
						itemStyle: {
							normal: {
								color: "#ffedcc"
							},
							emphasis: {
								color: "#ffedcc"
							}
						}
					}]
				}    
			} 
			let myChartuse_of_search_engine_purchase_decision = echarts.init(document.getElementById('use_of_search_engine_purchase_decision'),"light");
  	        myChartuse_of_search_engine_purchase_decision.setOption(option);
			new ResizeSensor($('#use_of_search_engine_purchase_decision'), () => myChartuse_of_search_engine_purchase_decision.resize());
			$('#use_of_search_engine_purchase_decision').removeClass("is-loading"); 


			let frequency_of_online_purchases_from_abroad = data.frequency_of_online_purchases_from_abroad;
			let dataChart_frequency_of_online_purchases_from_abroad = []; 
			frequency_of_online_purchases_from_abroad.forEach(ele => {
				let temp = {
					name: ele[0],
					value: ele[1].toFixed(1),
				}

				
				dataChart_frequency_of_online_purchases_from_abroad.push(temp)
			});    
			option = { 
				tooltip: {
					trigger: "item",
					backgroundColor: 'rgba(255, 255, 255, 1)',
					borderColor: 'rgba(93,120,255,1)',
					borderWidth: 1,
					position: "right",
					extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
					formatter: params => {
						// marker = "<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ff9f7f;"></span>"
						//"<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#37A2DA;"></span>"
						//"<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FFDB5C;"></span>"
						//"<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#67E0E3;"></span>"
						// console.log(params);
						
						let percent = params.percent;
						let marker = params.marker;
						
							let name = ""; 
							let color = "";
							let detail = "";

						dataChart_frequency_of_online_purchases_from_abroad.forEach(ele => {
							// console.log(ele)
							if(ele.name == "I have never bought products online from abroad"){
								name = "Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài";
								color = "#ff9f7f";
							}
							else if(ele.name == "I have only bought products online from abroad once"){
								name = "Chỉ mua sản phẩm trực tuyến từ nước ngoài một lần";
								color = "#FFDB5C";
							}
							else if(ele.name == "Less often than once a year"){
								name = "Ít hơn một lần một năm";
								color = "#67E0E3";
							}
							else {
								name = "Ít nhất một năm một lần"; 
								color = "#37A2DA"
							}	

							detail += ` <div class="d-flex text-left text-dark text-capitalize">
											<span class="mt-2" style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span> 
											<div class="font-gg font-13 mr-2" style="width: 200px; white-space: pre-wrap;">${name}</div>
											<div style="font-weight:bold">${ele.value}%</div>
										</div>` 
						});

						return detail;
						// return `<div class="text-dark text-capitalize">
						// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ff9f7f;"></span> 
						// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
						// 			<span style="font-weight:bold">30%</span>
						// 		</div>
						// 		<div class="text-dark text-capitalize">
						// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#37A2DA;"></span>	
						// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
						// 			<span style="font-weight:bold">30%</span>
						// 		</div>
						// 		<div class="text-dark text-capitalize">
						// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FFDB5C;"></span>	
						// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
						// 			<span style="font-weight:bold">30%</span>
						// 		</div>
						// 		<div class="text-dark text-capitalize">
						// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#67E0E3;"></span>	
						// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
						// 			<span style="font-weight:bold">30%</span>
						// 		</div>`

						// da cam ff9f7f 
						// xanh duong 37A2DA
						// vang FFDB5C
						// xanh bien 67E0E3

					}
				},
				series: [
					{  
						type:'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
								formatter: '', //{value|{d}%}
								rich: {
									text: {
										color: "#666",
										fontSize: 12,
										fontFamily: 'Arial',
										align: 'center',
										verticalAlign: 'middle',
										padding: 5,  
									},
									value: {
										color: "#8693F3",
										fontSize: 24,
										align: 'center',
										verticalAlign: 'middle',
									},
								}
							},
							emphasis: {
								show: true,
								// textStyle: {
								// 	fontSize: '30',
								// 	fontWeight: 'bold'
								// }
							}
						},
						// labelLine: {
						// 	normal: {
						// 		show: false
						// 	}
						// },
						data: dataChart_frequency_of_online_purchases_from_abroad
					}
				]
			};  
			let myChartfrequency_of_online_purchases_from_abroad = echarts.init(document.getElementById('frequency_of_online_purchases_from_abroad'),"light");
  	        myChartfrequency_of_online_purchases_from_abroad.setOption(option);
			new ResizeSensor($('#frequency_of_online_purchases_from_abroad'), () => myChartfrequency_of_online_purchases_from_abroad.resize());
			$('#frequency_of_online_purchases_from_abroad').removeClass("is-loading"); 


			let ease_of_doing_business = data.ease_of_doing_business;
			$(".ease_of_doing_business").html(ease_of_doing_business.value + `<div class="font-13 font-gg text-muted">
																					trong số 190 quốc gia
																			</div>`).removeClass("is-loading"); 

			let population_size = data.population_size;
			$(".population_size").text("~ " + numeral(population_size.value).format("0,0a")).removeClass("is-loading");


			let languages = data.languages;    
			for (let i in languages) {  
				let val = numeral(languages[i].speaking_population/population_size.value).format("0,0%");
				if(val == "0%")
					val = "< 1%";

				if(i == "cjm")
					$(`.${i}`).text(languages[i].language + ` (${val})`);
				if(i == "vi")
					$(`.${i}`).text(languages[i].language + ` (${val})`);
				if(i == "zh_Hant")
					$(`.${i}`).text(languages[i].language + ` (${val})`).parent().removeClass("is-loading");
			}

			let currency = data.currency;
			$(".currency").text(currency["iso-4217"]).removeClass("is-loading");

			
			let corruption_perception = data.corruption_perception;

			$(".corruption_perception").html(corruption_perception.score + `<span class="ml-2 font-gg font-13 text-muted">Hạng #${corruption_perception.rank}</span>`)
			.after(`
			<div class="mt-2">
				<div class="progress w-70 m-auto">
					<div class="progress-bar bg-warning" style="height: 8px; width: ${corruption_perception.score}%"
						role="progressbar" aria-valuenow="${corruption_perception.score}" aria-valuemin="0"
						aria-valuemax="100"></div>
				</div>
			</div>`).removeClass("is-loading");
			
			let average_age_male = data.average_age.male;
			let average_age_female = data.average_age.female;

			$(".average_age_male").html(`
				<div class="no-block d-flex w-70 m-auto">
					<div class="font-13 text-muted font-gg pb-1">
						Nam
					</div>
					<div class="ml-auto font-13 text-muted font-gg">
						${average_age_male}
					</div>
				</div>
				<div class="progress w-70 m-auto">
					<div class="progress-bar bg-info" style="height: 8px; width: ${average_age_male}%"
						role="progressbar" aria-valuenow="${average_age_male}" aria-valuemin="0"
						aria-valuemax="100"></div>
				</div> `)

			$(".average_age_female").html(`
				<div class="no-block d-flex w-70 m-auto">
					<div class="font-13 text-muted font-gg pb-1">
						Nữ
					</div>
					<div class="ml-auto font-13 text-muted font-gg">
						${average_age_female}
					</div>
				</div>
				<div class="progress w-70 m-auto">
					<div class="progress-bar bg-danger" style="height: 8px; width: ${average_age_female}%"
						role="progressbar" aria-valuenow="${average_age_female}" aria-valuemin="0"
						aria-valuemax="100"></div>
				</div> `).parent().removeClass("is-loading"); 
				

			let gdp_current_prices = data.gdp_current_prices;
			$(".gdp_current_prices").html(numeral(gdp_current_prices.value*23000).format("0,0a") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); ;
			// $(".gdp_current_prices").text( "$" + numeral(gdp_current_prices.value).format("0,0a"));
			// $(".gdp_current_prices_vnd").text(numeral(gdp_current_prices.value*23000).format("0,0a") + " vnd");

			let gdp_per_capita = data.gdp_per_capita;
			$(".gdp_per_capita").html(numeral(gdp_per_capita.value*23000).format("0,0a") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); ;
			// $(".gdp_per_capita").text("$" + numeral(gdp_per_capita.value).format("0,0a"));
			// $(".gdp_per_capita_vnd").text(numeral(gdp_per_capita.value*23000).format("0,0a") + " vnd");

			let purchasing_power_parity = data.purchasing_power_parity;
			$(".purchasing_power_parity").html(numeral(purchasing_power_parity.value*23000).format("0,0a") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); ;
			// $(".purchasing_power_parity").text("$" + numeral(purchasing_power_parity.value).format("0,0a"));
			// $(".purchasing_power_parity_vnd").text(numeral(purchasing_power_parity.value*23000).format("0,0a") + " vnd");

			let gdp_annual_growth = data.gdp_annual_growth;
			$(".gdp_annual_growth").text(gdp_annual_growth.value.toPrecision(2) + "%").removeClass("is-loading"); ;

			let unemployment_rate = data.unemployment_rate;
			$(".unemployment_rate").text(unemployment_rate.value.toPrecision(2) + "%").removeClass("is-loading"); ;

			let global_competitiveness = data.global_competitiveness;
			$(".global_competitiveness").text(global_competitiveness.score)
			.after(`<div class="mt-2">
						<div class="progress w-70 m-auto">
							<div class="progress-bar bg-success"
								style="height: 8px; width: ${global_competitiveness.rank}%" role="progressbar"
								aria-valuenow="${global_competitiveness.rank}" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div class="mt-2 font-13 text-muted font-gg">
                        hạng #${global_competitiveness.rank}
					</div>`).removeClass("is-loading"); 

			$(".ease_of_doing_business_").text(ease_of_doing_business.value)
			.after(`<div class="mt-2">
						<div class="progress w-70 m-auto">
							<div class="progress-bar bg-info" style="height: 8px; width: ${ease_of_doing_business.value}%"
								role="progressbar" aria-valuenow="${ease_of_doing_business.value}" aria-valuemin="0"
								aria-valuemax="100"></div>
						</div>
					</div>
					<div class="font-13 font-gg text-muted mt-2">
						trong số 190 quốc gia
					</div>`).removeClass("is-loading"); 
		
			let logistics_performance = data.logistics_performance;
			$(".logistics_performance").text(logistics_performance.value)
			.after(`<div class="mt-2">
						<div class="progress w-70 m-auto">
							<div class="progress-bar bg-info" style="height: 8px; width: ${logistics_performance.value*20}%"
								role="progressbar" aria-valuenow="${logistics_performance.value*20}" aria-valuemin="0"
								aria-valuemax="100"></div>
						</div>
					</div> `).removeClass("is-loading"); 

			//
			let internet_use_during_purchase_stages = data.internet_use_during_purchase_stages;
			internet_use_during_purchase_stages.forEach((ele,index) => {
				if(index == 0){
					$(".internet_use_during_purchase_stages")
					.append(`<div class="col-12 mb-3 ">
								<div class="d-flex">
									<div class="font-13 text-muted font-gg pb-1">
										Chuẩn bị trực tuyến để mua ngoại tuyến ngay lập tức (ví dụ: đã tìm kiếm các
										địa điểm trực tuyến)
									</div>
									<div class="ml-auto font-13 text-muted font-gg">
										${ele[1].toPrecision(2) + "%"}
									</div>
								</div>
								<div class="progress w-100">
									<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
										aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>`)
				} else if(index == 1) {
					$(".internet_use_during_purchase_stages")
					.append(`<div class="col-12 mb-3 ">
								<div class="d-flex">
									<div class="font-13 text-muted font-gg pb-1">
										Tìm kiếm cảm hứng ban đầu và thực hiện những khám phá ban đầu trực tuyến
									</div>
									<div class="ml-auto font-13 text-muted font-gg">
										${ele[1].toPrecision(2) + "%"}
									</div>
								</div>
								<div class="progress w-100">
									<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
										aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>`)
				} else if(index == 2) {
					$(".internet_use_during_purchase_stages")
					.append(`<div class="col-12 mb-3 ">
								<div class="d-flex">
									<div class="font-13 text-muted font-gg pb-1">
										So sánh lựa chọn trực tuyến
									</div>
									<div class="ml-auto font-13 text-muted font-gg">
										${ele[1].toPrecision(2) + "%"}
									</div>
								</div>
								<div class="progress w-100">
									<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
										aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>`)
				} else {
					$(".internet_use_during_purchase_stages")
					.append(`<div class="col-12 mb-3 ">
								<div class="d-flex">
									<div class="font-13 text-muted font-gg pb-1">
										Tư vấn trực tuyến
									</div>
									<div class="ml-auto font-13 text-muted font-gg">
										${ele[1].toPrecision(2) + "%"}
									</div>
								</div>
								<div class="progress w-100">
									<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
										aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>`)
				}
				
			}); 
			$(".internet_use_during_purchase_stages").removeClass("is-loading")

			//
			let weekly_purchase_by_device = data.weekly_purchase_by_device;
			weekly_purchase_by_device.forEach((ele,index) => {
				if(index == 0 ) {
					$(".weekly_purchase_by_device")
					.append(`<div class="col-12 mb-3">
						<div class="d-flex">
							<div class="font-13 text-muted font-gg pb-1">
								Máy tính
							</div>
							<div class="ml-auto font-13 text-muted font-gg">
								${ele[1].toPrecision(2) + "%"}
							</div>
						</div>
						<div class="progress w-100">
							<div class="progress-bar bg-danger" role="progressbar"
								style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
								aria-valuemax="100"></div>
						</div>
					</div>`)
				} else if(index == 1) {
					$(".weekly_purchase_by_device")
					.append(`<div class="col-12 mb-3">
						<div class="d-flex">
							<div class="font-13 text-muted font-gg pb-1">
								Máy tính bảng
							</div>
							<div class="ml-auto font-13 text-muted font-gg">
								${ele[1].toPrecision(2) + "%"}
							</div>
						</div>
						<div class="progress w-100">
							<div class="progress-bar bg-danger" role="progressbar"
								style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
								aria-valuemax="100"></div>
						</div>
					</div>`)
				} else {
					$(".weekly_purchase_by_device")
					.append(`<div class="col-12 mb-3">
						<div class="d-flex">
							<div class="font-13 text-muted font-gg pb-1">
								Điện thoại
							</div>
							<div class="ml-auto font-13 text-muted font-gg">
								${ele[1].toPrecision(2) + "%"}
							</div>
						</div>
						<div class="progress w-100">
							<div class="progress-bar bg-danger" role="progressbar"
								style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
								aria-valuemax="100"></div>
						</div>
					</div>`)
				}
				
			}); 
			$(".weekly_purchase_by_device").removeClass("is-loading")

			//
			let devices_used_for_product_research = data.devices_used_for_product_research;
			devices_used_for_product_research.forEach((ele,index) => {
				if(index == 0) {
					$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
										<div class="d-flex">
											<div class="font-13 text-muted font-gg pb-1">
												Máy tính
											</div>
											<div class="ml-auto font-13 text-muted font-gg">
												${ele[1].toPrecision(2)}%
											</div>
										</div>
										<div class="progress w-100">
											<div class="progress-bar bg-success" role="progressbar"
												style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
												aria-valuemax="100"></div>
										</div>
									</div>`)
				} else if(index == 1) {
					$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
										<div class="d-flex">
											<div class="font-13 text-muted font-gg pb-1">
												Điện thoại
											</div>
											<div class="ml-auto font-13 text-muted font-gg">
												${ele[1].toPrecision(2)}%
											</div>
										</div>
										<div class="progress w-100">
											<div class="progress-bar bg-info" role="progressbar"
												style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
												aria-valuemax="100"></div>
										</div>
									</div>`) 
				} else if(index == 2) {
					$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
										<div class="d-flex">
											<div class="font-13 text-muted font-gg pb-1">
												Máy tính bảng
											</div>
											<div class="ml-auto font-13 text-muted font-gg">
												${ele[1].toPrecision(2)}%
											</div>
										</div>
										<div class="progress w-100">
											<div class="progress-bar bg-warning" role="progressbar"
												style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
												aria-valuemax="100"></div>
										</div>
									</div>`)
				} else if(index == 3) {
					$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
										<div class="d-flex">
											<div class="font-13 text-muted font-gg pb-1">
												Thiết bị hỗ trợ Internet khác
											</div>
											<div class="ml-auto font-13 text-muted font-gg">
												${ele[1].toPrecision(2)}%
											</div>
										</div>
										<div class="progress w-100">
											<div class="progress-bar bg-warning" role="progressbar"
												style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
												aria-valuemax="100"></div>
										</div>
									</div>`)
				} else {
					$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
										<div class="d-flex">
											<div class="font-13 text-muted font-gg pb-1">
												Không nhớ loại thiết bị
											</div>
											<div class="ml-auto font-13 text-muted font-gg">
												${ele[1].toPrecision(2)}%
											</div>
										</div>
										<div class="progress w-100">
											<div class="progress-bar bg-danger" role="progressbar"
												style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
												aria-valuemax="100"></div>
										</div>
									</div>`).removeClass("is-loading")
				}
			});
			$(".devices_used_for_product_research").removeClass("is-loading")

			//
			let trading_across_borders_rank = data.trading_across_borders_rank;
			$(".trading_across_borders_rank").html(`#${trading_across_borders_rank.value} <div class="font-13 font-gg text-muted mt-1"> trong số 190 quốc gia </div>`).removeClass("is-loading")

			let time_to_import_border_compliance = data.time_to_import_border_compliance;
			$(".time_to_import_border_compliance").html(`${time_to_import_border_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_import_border_compliance.rank} </div>`).removeClass("is-loading")
			
			let time_to_export_border_compliance = data.time_to_export_border_compliance;
			$(".time_to_export_border_compliance").html(`${time_to_export_border_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_export_border_compliance.rank} </div>`).removeClass("is-loading")

			let cost_to_import_documentary_compliance = data.cost_to_import_documentary_compliance;
			$(".cost_to_import_documentary_compliance").html(`${numeral(cost_to_import_documentary_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_import_documentary_compliance.rank} </div>`).removeClass("is-loading")

			let cost_to_export_documentary_compliance = data.cost_to_export_documentary_compliance;
			$(".cost_to_export_documentary_compliance").html(`${numeral(cost_to_export_documentary_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_export_documentary_compliance.rank} </div>`).removeClass("is-loading")

			let time_to_import_documentary_compliance = data.time_to_import_documentary_compliance;
			$(".time_to_import_documentary_compliance").html(`${time_to_import_documentary_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_import_documentary_compliance.rank} </div>`).removeClass("is-loading")

			let time_to_export_documentary_compliance = data.time_to_export_documentary_compliance;
			$(".time_to_export_documentary_compliance").html(`${time_to_export_documentary_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_export_documentary_compliance.rank} </div>`).removeClass("is-loading")

			let cost_to_import_border_compliance = data.cost_to_import_border_compliance;
			$(".cost_to_import_border_compliance").html(`${numeral(cost_to_import_border_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_import_border_compliance.rank} </div>`).removeClass("is-loading")

			let cost_to_export_border_compliance = data.cost_to_export_border_compliance;
			$(".cost_to_export_border_compliance").html(`${numeral(cost_to_export_border_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_export_border_compliance.rank} </div>`).removeClass("is-loading")

	}

	// window.googleConstantData = function googleConstantData(){
	// 	let url = `//localapi.trazk.com/webdata/market.php?task=googleConstantData`;
	// 	$.get(url,function(data){ 
	// 		data = data.data.non_api_datapoints.data[202];
	// 		data = data.datapoints;
	// 		console.log(data);

	// 		let payment_methods = data.global_payments_country_breakdown;  
	// 		let legend_payment_methods = [];
	// 		payment_methods.forEach(ele => {
	// 			legend_payment_methods.push(ele.name);
	// 		}); 
	// 		let option = { 
	// 			// legend: {
	// 			// 	// orient: 'vertical',
	// 			// 	// x: 'left',
	// 			// 	top: "0%", 
	// 			// 	data:legend_payment_methods
	// 			// },
	// 			series: [
	// 				{ 
	// 					name: "Phương thức thanh toán",
	// 					type:'pie',
	// 					radius: ['50%', '70%'],
	// 					avoidLabelOverlap: false,
	// 					label: {
	// 						normal: {
	// 							show: false,
	// 							position: 'center',
	// 							formatter: '{text|{b}}\n{value|{d}%}',
	// 							rich: {
	// 								text: {
	// 									color: "#666",
	// 									fontSize: 12,
	// 									fontFamily: 'Arial',
	// 									align: 'center',
	// 									verticalAlign: 'middle',
	// 									padding: 5
	// 								},
	// 								value: {
	// 									color: "#8693F3",
	// 									fontSize: 24,
	// 									align: 'center',
	// 									verticalAlign: 'middle',
	// 								},
	// 							}
	// 						},
	// 						emphasis: {
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '30',
	// 								fontWeight: 'bold'
	// 							}
	// 						}
	// 					},
	// 					labelLine: {
	// 						normal: {
	// 							show: false
	// 						}
	// 					},
	// 					data: payment_methods
	// 				}
	// 			]
	// 		};  
	// 		let myChartpayment_methods = echarts.init(document.getElementById('payment-methods'),"light");
  	//         myChartpayment_methods.setOption(option);
	// 		new ResizeSensor($('#payment-methods'), () => myChartpayment_methods.resize()); 
	// 		$('#payment-methods').removeClass("is-loading"); 

	// 		let android_and_ios = data.android_and_ios;
	// 		let dataChart_android_and_ios = [];
	// 		let legend_android_and_ios = [];
	// 		android_and_ios.elements.forEach(ele => {
	// 			if(ele[0]=="Other")
	// 				ele[0] = "Khác"; 

	// 			let temp = {
	// 				name: ele[0],
	// 				value: ele[1],
	// 			}

	// 			legend_android_and_ios.push(ele[0]);
	// 			dataChart_android_and_ios.push(temp)
	// 		});    
	// 		option = { 
	// 			// legend: {
	// 			// 	// orient: 'vertical',
	// 			// 	// x: 'right',
	// 			// 	top: "0%",
	// 			// 	// right: '0%',
	// 			// 	// bottom: "0%",
	// 			// 	data: legend_android_and_ios,
	// 			// },
	// 			series: [
	// 				{ 
	// 					name: "Sử dụng Android và iOS",
	// 					type:'pie',
	// 					radius: ['50%', '70%'],
	// 					avoidLabelOverlap: false,
	// 					label: {
	// 						normal: {
	// 							show: false,
	// 							position: 'center',
	// 							formatter: '{text|{b}}\n{value|{d}%}',
	// 							rich: {
	// 								text: {
	// 									color: "#666",
	// 									fontSize: 12,
	// 									fontFamily: 'Arial',
	// 									align: 'center',
	// 									verticalAlign: 'middle',
	// 									padding: 5
	// 								},
	// 								value: {
	// 									color: "#8693F3",
	// 									fontSize: 24,
	// 									align: 'center',
	// 									verticalAlign: 'middle',
	// 								},
	// 							}
	// 						},
	// 						emphasis: {
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '30',
	// 								fontWeight: 'bold'
	// 							}
	// 						}
	// 					},
	// 					labelLine: {
	// 						normal: {
	// 							show: false
	// 						}
	// 					},
	// 					data: dataChart_android_and_ios
	// 				}
	// 			]
	// 		};  
	// 		let myChartandroid_and_ios = echarts.init(document.getElementById('android_and_ios'),"light");
  	//         myChartandroid_and_ios.setOption(option);
	// 		new ResizeSensor($('#android_and_ios'), () => myChartandroid_and_ios.resize());
	// 		$('#android_and_ios').removeClass("is-loading"); 

	// 		let broadband_penetration = data.broadband_penetration; 

	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#389af4',
	// 						shadowColor: '#389af4',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(broadband_penetration.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#389af4'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(broadband_penetration.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#dfeaff"
	// 						},
	// 						emphasis: {
	// 							color: "#dfeaff"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		}

	// 		let myChartbroadband_penetration = echarts.init(document.getElementById('broadband_penetration'),"light");
  	//         myChartbroadband_penetration.setOption(option);
	// 		new ResizeSensor($('#broadband_penetration'), () => myChartbroadband_penetration.resize());
	// 		$('#broadband_penetration').removeClass("is-loading"); 

	// 		let internet_users_percentage = data.internet_users_percentage; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#ff8c37',
	// 						shadowColor: '#ff8c37',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(internet_users_percentage.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#ff8c37'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(internet_users_percentage.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#ffdcc3"
	// 						},
	// 						emphasis: {
	// 							color: "#ffdcc3"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartinternet_users_percentage = echarts.init(document.getElementById('internet_users_percentage'),"light");
  	//         myChartinternet_users_percentage.setOption(option);
	// 		new ResizeSensor($('#internet_users_percentage'), () => myChartinternet_users_percentage.resize());
	// 		$('#internet_users_percentage').removeClass("is-loading"); 

	// 		let frequency_of_internet_use = data.frequency_of_internet_use; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#a181fc',
	// 						shadowColor: '#a181fc',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(frequency_of_internet_use.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#a181fc'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(frequency_of_internet_use.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#e3d9fe"
	// 						},
	// 						emphasis: {
	// 							color: "#e3d9fe"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartfrequency_of_internet_use = echarts.init(document.getElementById('frequency_of_internet_use'),"light");
  	//         myChartfrequency_of_internet_use.setOption(option);
	// 		new ResizeSensor($('#frequency_of_internet_use'), () => myChartfrequency_of_internet_use.resize());
	// 		$('#frequency_of_internet_use').removeClass("is-loading"); 


	// 		let daily_video_views_by_smartphone = data.daily_video_views_by_smartphone; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#fd6f97',
	// 						shadowColor: '#fd6f97',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(daily_video_views_by_smartphone.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#fd6f97'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(daily_video_views_by_smartphone.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#fed4e0"
	// 						},
	// 						emphasis: {
	// 							color: "#fed4e0"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartdaily_video_views_by_smartphone = echarts.init(document.getElementById('daily_video_views_by_smartphone'),"light");
  	//         myChartdaily_video_views_by_smartphone.setOption(option);
	// 		new ResizeSensor($('#daily_video_views_by_smartphone'), () => myChartdaily_video_views_by_smartphone.resize()); 
	// 		$('#daily_video_views_by_smartphone').removeClass("is-loading"); 


	// 		let learn_about_product_online = data.learn_about_product_online; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#ffc257',
	// 						shadowColor: '#ffc257',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(learn_about_product_online.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#ffc257'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(learn_about_product_online.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#ffedcc"
	// 						},
	// 						emphasis: {
	// 							color: "#ffedcc"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartlearn_about_product_online = echarts.init(document.getElementById('learn_about_product_online'),"light");
  	//         myChartlearn_about_product_online.setOption(option);
	// 		new ResizeSensor($('#learn_about_product_online'), () => myChartlearn_about_product_online.resize());
	// 		$('#learn_about_product_online').removeClass("is-loading"); 


	// 		let people_first_hear_about_product_via_advertising = data.people_first_hear_about_product_via_advertising; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#ffc257',
	// 						shadowColor: '#ffc257',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(people_first_hear_about_product_via_advertising.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#ffc257'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(people_first_hear_about_product_via_advertising.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#ffedcc"
	// 						},
	// 						emphasis: {
	// 							color: "#ffedcc"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartpeople_first_hear_about_product_via_advertising = echarts.init(document.getElementById('people_first_hear_about_product_via_advertising'),"light");
  	//         myChartpeople_first_hear_about_product_via_advertising.setOption(option);
	// 		new ResizeSensor($('#people_first_hear_about_product_via_advertising'), () => myChartpeople_first_hear_about_product_via_advertising.resize());
	// 		$('#people_first_hear_about_product_via_advertising').removeClass("is-loading"); 


	// 		let exclusive_online_research = data.exclusive_online_research; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#ffc257',
	// 						shadowColor: '#ffc257',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(exclusive_online_research.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#ffc257'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(exclusive_online_research.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#ffedcc"
	// 						},
	// 						emphasis: {
	// 							color: "#ffedcc"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartexclusive_online_research = echarts.init(document.getElementById('exclusive_online_research'),"light");
  	//         myChartexclusive_online_research.setOption(option);
	// 		new ResizeSensor($('#exclusive_online_research'), () => myChartexclusive_online_research.resize());
	// 		$('#exclusive_online_research').removeClass("is-loading"); 

	// 		let use_of_search_engine_purchase_decision = data.use_of_search_engine_purchase_decision; 
	// 		option = {
	// 			backgroundColor: "#fff", 
	// 			series: { 
	// 				type: 'pie',
	// 				clockWise: true,
	// 				radius: [60, 70],
	// 				itemStyle:  {
	// 					normal: {
	// 						color: '#ffc257',
	// 						shadowColor: '#ffc257',
	// 						shadowBlur: 0,
	// 						label: {
	// 							show: false
	// 						},
	// 						labelLine: {
	// 							show: false
	// 						},
	// 					}
	// 				},
	// 				hoverAnimation: false, 
	// 				data: [{
	// 					value: numeral(use_of_search_engine_purchase_decision.value).format("0"),
	// 					label: {
	// 						normal: {
	// 							formatter: function(params){
	// 								return params.value+'%';
	// 							},
	// 							position: 'center',
	// 							show: true,
	// 							textStyle: {
	// 								fontSize: '20',
	// 								fontWeight: 'bold',
	// 								color: '#ffc257'
	// 							}
	// 						}
	// 					},
	// 				}, {
	// 					value: 100-numeral(use_of_search_engine_purchase_decision.value).format("0"),
	// 					name: 'invisible',
	// 					itemStyle: {
	// 						normal: {
	// 							color: "#ffedcc"
	// 						},
	// 						emphasis: {
	// 							color: "#ffedcc"
	// 						}
	// 					}
	// 				}]
	// 			}    
	// 		} 
	// 		let myChartuse_of_search_engine_purchase_decision = echarts.init(document.getElementById('use_of_search_engine_purchase_decision'),"light");
  	//         myChartuse_of_search_engine_purchase_decision.setOption(option);
	// 		new ResizeSensor($('#use_of_search_engine_purchase_decision'), () => myChartuse_of_search_engine_purchase_decision.resize());
	// 		$('#use_of_search_engine_purchase_decision').removeClass("is-loading"); 


	// 		let frequency_of_online_purchases_from_abroad = data.frequency_of_online_purchases_from_abroad;
	// 		let dataChart_frequency_of_online_purchases_from_abroad = []; 
	// 		frequency_of_online_purchases_from_abroad.forEach(ele => {
	// 			let temp = {
	// 				name: ele[0],
	// 				value: ele[1].toFixed(1),
	// 			}

				
	// 			dataChart_frequency_of_online_purchases_from_abroad.push(temp)
	// 		});    
	// 		option = { 
	// 			tooltip: {
	// 				trigger: "item",
	// 				backgroundColor: 'rgba(255, 255, 255, 1)',
	// 				borderColor: 'rgba(93,120,255,1)',
	// 				borderWidth: 1,
	// 				position: "right",
	// 				extraCssText: 'padding: 10px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);',
	// 				formatter: params => {
	// 					// marker = "<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ff9f7f;"></span>"
	// 					//"<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#37A2DA;"></span>"
	// 					//"<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FFDB5C;"></span>"
	// 					//"<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#67E0E3;"></span>"
	// 					// console.log(params);
						
	// 					let percent = params.percent;
	// 					let marker = params.marker;
						
	// 						let name = ""; 
	// 						let color = "";
	// 						let detail = "";

	// 					dataChart_frequency_of_online_purchases_from_abroad.forEach(ele => {
	// 						// console.log(ele)
	// 						if(ele.name == "I have never bought products online from abroad"){
	// 							name = "Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài";
	// 							color = "#ff9f7f";
	// 						}
	// 						else if(ele.name == "I have only bought products online from abroad once"){
	// 							name = "Chỉ mua sản phẩm trực tuyến từ nước ngoài một lần";
	// 							color = "#FFDB5C";
	// 						}
	// 						else if(ele.name == "Less often than once a year"){
	// 							name = "Ít hơn một lần một năm";
	// 							color = "#67E0E3";
	// 						}
	// 						else {
	// 							name = "Ít nhất một năm một lần"; 
	// 							color = "#37A2DA"
	// 						}	

	// 						detail += ` <div class="d-flex text-left text-dark text-capitalize">
	// 										<span class="mt-2" style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span> 
	// 										<div class="font-gg font-13 mr-2" style="width: 200px; white-space: pre-wrap;">${name}</div>
	// 										<div style="font-weight:bold">${ele.value}%</div>
	// 									</div>` 
	// 					});

	// 					return detail;
	// 					// return `<div class="text-dark text-capitalize">
	// 					// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ff9f7f;"></span> 
	// 					// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
	// 					// 			<span style="font-weight:bold">30%</span>
	// 					// 		</div>
	// 					// 		<div class="text-dark text-capitalize">
	// 					// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#37A2DA;"></span>	
	// 					// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
	// 					// 			<span style="font-weight:bold">30%</span>
	// 					// 		</div>
	// 					// 		<div class="text-dark text-capitalize">
	// 					// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#FFDB5C;"></span>	
	// 					// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
	// 					// 			<span style="font-weight:bold">30%</span>
	// 					// 		</div>
	// 					// 		<div class="text-dark text-capitalize">
	// 					// 			<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#67E0E3;"></span>	
	// 					// 			<span>Chưa bao giờ mua sản phẩm trực tuyến từ nước ngoài</span>
	// 					// 			<span style="font-weight:bold">30%</span>
	// 					// 		</div>`

	// 					// da cam ff9f7f 
	// 					// xanh duong 37A2DA
	// 					// vang FFDB5C
	// 					// xanh bien 67E0E3

	// 				}
	// 			},
	// 			series: [
	// 				{  
	// 					type:'pie',
	// 					radius: ['50%', '70%'],
	// 					avoidLabelOverlap: false,
	// 					label: {
	// 						normal: {
	// 							show: false,
	// 							position: 'center',
	// 							formatter: '', //{value|{d}%}
	// 							rich: {
	// 								text: {
	// 									color: "#666",
	// 									fontSize: 12,
	// 									fontFamily: 'Arial',
	// 									align: 'center',
	// 									verticalAlign: 'middle',
	// 									padding: 5,  
	// 								},
	// 								value: {
	// 									color: "#8693F3",
	// 									fontSize: 24,
	// 									align: 'center',
	// 									verticalAlign: 'middle',
	// 								},
	// 							}
	// 						},
	// 						emphasis: {
	// 							show: true,
	// 							// textStyle: {
	// 							// 	fontSize: '30',
	// 							// 	fontWeight: 'bold'
	// 							// }
	// 						}
	// 					},
	// 					// labelLine: {
	// 					// 	normal: {
	// 					// 		show: false
	// 					// 	}
	// 					// },
	// 					data: dataChart_frequency_of_online_purchases_from_abroad
	// 				}
	// 			]
	// 		};  
	// 		let myChartfrequency_of_online_purchases_from_abroad = echarts.init(document.getElementById('frequency_of_online_purchases_from_abroad'),"light");
  	//         myChartfrequency_of_online_purchases_from_abroad.setOption(option);
	// 		new ResizeSensor($('#frequency_of_online_purchases_from_abroad'), () => myChartfrequency_of_online_purchases_from_abroad.resize());
	// 		$('#frequency_of_online_purchases_from_abroad').removeClass("is-loading"); 


	// 		let ease_of_doing_business = data.ease_of_doing_business;
	// 		$(".ease_of_doing_business").html(ease_of_doing_business.value + `<div class="font-13 font-gg text-muted">
	// 																				trong số 190 quốc gia
	// 																		</div>`).removeClass("is-loading"); 

	// 		let population_size = data.population_size;
	// 		$(".population_size").text("~ " + numeral(population_size.value).format("0,0a")).removeClass("is-loading");


	// 		let languages = data.languages;    
	// 		for (let i in languages) {  
	// 			let val = numeral(languages[i].speaking_population/population_size.value).format("0,0%");
	// 			if(val == "0%")
	// 				val = "< 1%";

	// 			if(i == "cjm")
	// 				$(`.${i}`).text(languages[i].language + ` (${val})`);
	// 			if(i == "vi")
	// 				$(`.${i}`).text(languages[i].language + ` (${val})`);
	// 			if(i == "zh_Hant")
	// 				$(`.${i}`).text(languages[i].language + ` (${val})`).parent().removeClass("is-loading");
	// 		}

	// 		let currency = data.currency;
	// 		$(".currency").text(currency["iso-4217"]).removeClass("is-loading");

			
	// 		let corruption_perception = data.corruption_perception;

	// 		$(".corruption_perception").text(corruption_perception.score)
	// 		.after(`
	// 		<div class="mt-2">
	// 			<div class="progress w-70 m-auto">
	// 				<div class="progress-bar bg-warning" style="height: 8px; width: ${corruption_perception.score}%"
	// 					role="progressbar" aria-valuenow="${corruption_perception.score}" aria-valuemin="0"
	// 					aria-valuemax="100"></div>
	// 			</div>
	// 		</div>
	// 		<div class="font-gg font-15 text-muted mt-3 font-weight-bold">
	// 			Hạng #${corruption_perception.rank}
	// 		</div>
	// 		`).removeClass("is-loading");
			
	// 		let average_age_male = data.average_age.male;
	// 		let average_age_female = data.average_age.female;

	// 		$(".average_age_male").html(`
	// 			<div class="d-flex w-70 m-auto">
	// 				<div class="font-13 text-muted font-gg pb-1">
	// 					Nam
	// 				</div>
	// 				<div class="ml-auto font-13 text-muted font-gg">
	// 					${average_age_male}
	// 				</div>
	// 			</div>
	// 			<div class="progress w-70 m-auto">
	// 				<div class="progress-bar bg-info" style="height: 8px; width: ${average_age_male}%"
	// 					role="progressbar" aria-valuenow="${average_age_male}" aria-valuemin="0"
	// 					aria-valuemax="100"></div>
	// 			</div> `)

	// 		$(".average_age_female").html(`
	// 			<div class="d-flex w-70 m-auto">
	// 				<div class="font-13 text-muted font-gg pb-1">
	// 					Nữ
	// 				</div>
	// 				<div class="ml-auto font-13 text-muted font-gg">
	// 					${average_age_female}
	// 				</div>
	// 			</div>
	// 			<div class="progress w-70 m-auto">
	// 				<div class="progress-bar bg-danger" style="height: 8px; width: ${average_age_female}%"
	// 					role="progressbar" aria-valuenow="${average_age_female}" aria-valuemin="0"
	// 					aria-valuemax="100"></div>
	// 			</div> `).parent().removeClass("is-loading"); 
				

	// 		let gdp_current_prices = data.gdp_current_prices;
	// 		$(".gdp_current_prices").html(numeral(gdp_current_prices.value*23000).format("0,0a") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); ;
	// 		// $(".gdp_current_prices").text( "$" + numeral(gdp_current_prices.value).format("0,0a"));
	// 		// $(".gdp_current_prices_vnd").text(numeral(gdp_current_prices.value*23000).format("0,0a") + " vnd");

	// 		let gdp_per_capita = data.gdp_per_capita;
	// 		$(".gdp_per_capita").html(numeral(gdp_per_capita.value*23000).format("0,0a") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); ;
	// 		// $(".gdp_per_capita").text("$" + numeral(gdp_per_capita.value).format("0,0a"));
	// 		// $(".gdp_per_capita_vnd").text(numeral(gdp_per_capita.value*23000).format("0,0a") + " vnd");

	// 		let purchasing_power_parity = data.purchasing_power_parity;
	// 		$(".purchasing_power_parity").html(numeral(purchasing_power_parity.value*23000).format("0,0a") + `<span class="font-20 font-gg font-weight-500"> VND</span>`).removeClass("is-loading"); ;
	// 		// $(".purchasing_power_parity").text("$" + numeral(purchasing_power_parity.value).format("0,0a"));
	// 		// $(".purchasing_power_parity_vnd").text(numeral(purchasing_power_parity.value*23000).format("0,0a") + " vnd");

	// 		let gdp_annual_growth = data.gdp_annual_growth;
	// 		$(".gdp_annual_growth").text(gdp_annual_growth.value.toPrecision(2) + "%").removeClass("is-loading"); ;

	// 		let unemployment_rate = data.unemployment_rate;
	// 		$(".unemployment_rate").text(unemployment_rate.value.toPrecision(2) + "%").removeClass("is-loading"); ;

	// 		let global_competitiveness = data.global_competitiveness;
	// 		$(".global_competitiveness").text(global_competitiveness.score)
	// 		.after(`<div class="mt-2">
	// 					<div class="progress w-70 m-auto">
	// 						<div class="progress-bar bg-success"
	// 							style="height: 8px; width: ${global_competitiveness.rank}%" role="progressbar"
	// 							aria-valuenow="${global_competitiveness.rank}" aria-valuemin="0" aria-valuemax="100"></div>
	// 					</div>
	// 				</div>
	// 				<div class="mt-2 font-13 text-muted font-gg">
    //                     hạng #${global_competitiveness.rank}
	// 				</div>`).removeClass("is-loading"); 

	// 		$(".ease_of_doing_business_").text(ease_of_doing_business.value)
	// 		.after(`<div class="mt-2">
	// 					<div class="progress w-70 m-auto">
	// 						<div class="progress-bar bg-info" style="height: 8px; width: ${ease_of_doing_business.value}%"
	// 							role="progressbar" aria-valuenow="${ease_of_doing_business.value}" aria-valuemin="0"
	// 							aria-valuemax="100"></div>
	// 					</div>
	// 				</div>
	// 				<div class="font-13 font-gg text-muted mt-2">
	// 					trong số 190 quốc gia
	// 				</div>`).removeClass("is-loading"); 
		
	// 		let logistics_performance = data.logistics_performance;
	// 		$(".logistics_performance").text(logistics_performance.value)
	// 		.after(`<div class="mt-2">
	// 					<div class="progress w-70 m-auto">
	// 						<div class="progress-bar bg-info" style="height: 8px; width: ${logistics_performance.value*20}%"
	// 							role="progressbar" aria-valuenow="${logistics_performance.value*20}" aria-valuemin="0"
	// 							aria-valuemax="100"></div>
	// 					</div>
	// 				</div> `).removeClass("is-loading"); 

	// 		//
	// 		let internet_use_during_purchase_stages = data.internet_use_during_purchase_stages;
	// 		internet_use_during_purchase_stages.forEach((ele,index) => {
	// 			if(index == 0){
	// 				$(".internet_use_during_purchase_stages")
	// 				.append(`<div class="col-12 mb-3 ">
	// 							<div class="d-flex">
	// 								<div class="font-13 text-muted font-gg pb-1">
	// 									Chuẩn bị trực tuyến để mua ngoại tuyến ngay lập tức (ví dụ: đã tìm kiếm các
	// 									địa điểm trực tuyến)
	// 								</div>
	// 								<div class="ml-auto font-13 text-muted font-gg">
	// 									${ele[1].toPrecision(2) + "%"}
	// 								</div>
	// 							</div>
	// 							<div class="progress w-100">
	// 								<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
	// 									aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
	// 							</div>
	// 						</div>`)
	// 			} else if(index == 1) {
	// 				$(".internet_use_during_purchase_stages")
	// 				.append(`<div class="col-12 mb-3 ">
	// 							<div class="d-flex">
	// 								<div class="font-13 text-muted font-gg pb-1">
	// 									Tìm kiếm cảm hứng ban đầu và thực hiện những khám phá ban đầu trực tuyến
	// 								</div>
	// 								<div class="ml-auto font-13 text-muted font-gg">
	// 									${ele[1].toPrecision(2) + "%"}
	// 								</div>
	// 							</div>
	// 							<div class="progress w-100">
	// 								<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
	// 									aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
	// 							</div>
	// 						</div>`)
	// 			} else if(index == 2) {
	// 				$(".internet_use_during_purchase_stages")
	// 				.append(`<div class="col-12 mb-3 ">
	// 							<div class="d-flex">
	// 								<div class="font-13 text-muted font-gg pb-1">
	// 									So sánh lựa chọn trực tuyến
	// 								</div>
	// 								<div class="ml-auto font-13 text-muted font-gg">
	// 									${ele[1].toPrecision(2) + "%"}
	// 								</div>
	// 							</div>
	// 							<div class="progress w-100">
	// 								<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
	// 									aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
	// 							</div>
	// 						</div>`)
	// 			} else {
	// 				$(".internet_use_during_purchase_stages")
	// 				.append(`<div class="col-12 mb-3 ">
	// 							<div class="d-flex">
	// 								<div class="font-13 text-muted font-gg pb-1">
	// 									Tư vấn trực tuyến
	// 								</div>
	// 								<div class="ml-auto font-13 text-muted font-gg">
	// 									${ele[1].toPrecision(2) + "%"}
	// 								</div>
	// 							</div>
	// 							<div class="progress w-100">
	// 								<div class="progress-bar" role="progressbar" style="height: 15px; width: ${ele[1].toPrecision(2)}%"
	// 									aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0" aria-valuemax="100"></div>
	// 							</div>
	// 						</div>`)
	// 			}
				
	// 		}); 
	// 		$(".internet_use_during_purchase_stages").removeClass("is-loading")

	// 		//
	// 		let weekly_purchase_by_device = data.weekly_purchase_by_device;
	// 		weekly_purchase_by_device.forEach((ele,index) => {
	// 			if(index == 0 ) {
	// 				$(".weekly_purchase_by_device")
	// 				.append(`<div class="col-12 mb-3">
	// 					<div class="d-flex">
	// 						<div class="font-13 text-muted font-gg pb-1">
	// 							Máy tính
	// 						</div>
	// 						<div class="ml-auto font-13 text-muted font-gg">
	// 							${ele[1].toPrecision(2) + "%"}
	// 						</div>
	// 					</div>
	// 					<div class="progress w-100">
	// 						<div class="progress-bar bg-danger" role="progressbar"
	// 							style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 							aria-valuemax="100"></div>
	// 					</div>
	// 				</div>`)
	// 			} else if(index == 1) {
	// 				$(".weekly_purchase_by_device")
	// 				.append(`<div class="col-12 mb-3">
	// 					<div class="d-flex">
	// 						<div class="font-13 text-muted font-gg pb-1">
	// 							Máy tính bảng
	// 						</div>
	// 						<div class="ml-auto font-13 text-muted font-gg">
	// 							${ele[1].toPrecision(2) + "%"}
	// 						</div>
	// 					</div>
	// 					<div class="progress w-100">
	// 						<div class="progress-bar bg-danger" role="progressbar"
	// 							style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 							aria-valuemax="100"></div>
	// 					</div>
	// 				</div>`)
	// 			} else {
	// 				$(".weekly_purchase_by_device")
	// 				.append(`<div class="col-12 mb-3">
	// 					<div class="d-flex">
	// 						<div class="font-13 text-muted font-gg pb-1">
	// 							Điện thoại
	// 						</div>
	// 						<div class="ml-auto font-13 text-muted font-gg">
	// 							${ele[1].toPrecision(2) + "%"}
	// 						</div>
	// 					</div>
	// 					<div class="progress w-100">
	// 						<div class="progress-bar bg-danger" role="progressbar"
	// 							style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 							aria-valuemax="100"></div>
	// 					</div>
	// 				</div>`)
	// 			}
				
	// 		}); 
	// 		$(".weekly_purchase_by_device").removeClass("is-loading")

	// 		//
	// 		let devices_used_for_product_research = data.devices_used_for_product_research;
	// 		devices_used_for_product_research.forEach((ele,index) => {
	// 			if(index == 0) {
	// 				$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
	// 									<div class="d-flex">
	// 										<div class="font-13 text-muted font-gg pb-1">
	// 											Máy tính
	// 										</div>
	// 										<div class="ml-auto font-13 text-muted font-gg">
	// 											${ele[1].toPrecision(2)}%
	// 										</div>
	// 									</div>
	// 									<div class="progress w-100">
	// 										<div class="progress-bar bg-success" role="progressbar"
	// 											style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 											aria-valuemax="100"></div>
	// 									</div>
	// 								</div>`)
	// 			} else if(index == 1) {
	// 				$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
	// 									<div class="d-flex">
	// 										<div class="font-13 text-muted font-gg pb-1">
	// 											Điện thoại
	// 										</div>
	// 										<div class="ml-auto font-13 text-muted font-gg">
	// 											${ele[1].toPrecision(2)}%
	// 										</div>
	// 									</div>
	// 									<div class="progress w-100">
	// 										<div class="progress-bar bg-info" role="progressbar"
	// 											style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 											aria-valuemax="100"></div>
	// 									</div>
	// 								</div>`) 
	// 			} else if(index == 2) {
	// 				$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
	// 									<div class="d-flex">
	// 										<div class="font-13 text-muted font-gg pb-1">
	// 											Máy tính bảng
	// 										</div>
	// 										<div class="ml-auto font-13 text-muted font-gg">
	// 											${ele[1].toPrecision(2)}%
	// 										</div>
	// 									</div>
	// 									<div class="progress w-100">
	// 										<div class="progress-bar bg-warning" role="progressbar"
	// 											style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 											aria-valuemax="100"></div>
	// 									</div>
	// 								</div>`)
	// 			} else if(index == 3) {
	// 				$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
	// 									<div class="d-flex">
	// 										<div class="font-13 text-muted font-gg pb-1">
	// 											Thiết bị hỗ trợ Internet khác
	// 										</div>
	// 										<div class="ml-auto font-13 text-muted font-gg">
	// 											${ele[1].toPrecision(2)}%
	// 										</div>
	// 									</div>
	// 									<div class="progress w-100">
	// 										<div class="progress-bar bg-warning" role="progressbar"
	// 											style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 											aria-valuemax="100"></div>
	// 									</div>
	// 								</div>`)
	// 			} else {
	// 				$(".devices_used_for_product_research").append(`<div class="col-12 mb-3">
	// 									<div class="d-flex">
	// 										<div class="font-13 text-muted font-gg pb-1">
	// 											Không nhớ loại thiết bị
	// 										</div>
	// 										<div class="ml-auto font-13 text-muted font-gg">
	// 											${ele[1].toPrecision(2)}%
	// 										</div>
	// 									</div>
	// 									<div class="progress w-100">
	// 										<div class="progress-bar bg-danger" role="progressbar"
	// 											style="height: 15px; width: ${ele[1].toPrecision(2)}%" aria-valuenow="${ele[1].toPrecision(2)}" aria-valuemin="0"
	// 											aria-valuemax="100"></div>
	// 									</div>
	// 								</div>`).removeClass("is-loading")
	// 			}
	// 		});
	// 		$(".devices_used_for_product_research").removeClass("is-loading")

	// 		//
	// 		let trading_across_borders_rank = data.trading_across_borders_rank;
	// 		$(".trading_across_borders_rank").html(`#${trading_across_borders_rank.value} <div class="font-13 font-gg text-muted mt-1"> trong số 190 quốc gia </div>`).removeClass("is-loading")

	// 		let time_to_import_border_compliance = data.time_to_import_border_compliance;
	// 		$(".time_to_import_border_compliance").html(`${time_to_import_border_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_import_border_compliance.rank} </div>`).removeClass("is-loading")
			
	// 		let time_to_export_border_compliance = data.time_to_export_border_compliance;
	// 		$(".time_to_export_border_compliance").html(`${time_to_export_border_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_export_border_compliance.rank} </div>`).removeClass("is-loading")

	// 		let cost_to_import_documentary_compliance = data.cost_to_import_documentary_compliance;
	// 		$(".cost_to_import_documentary_compliance").html(`${numeral(cost_to_import_documentary_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_import_documentary_compliance.rank} </div>`).removeClass("is-loading")

	// 		let cost_to_export_documentary_compliance = data.cost_to_export_documentary_compliance;
	// 		$(".cost_to_export_documentary_compliance").html(`${numeral(cost_to_export_documentary_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_export_documentary_compliance.rank} </div>`).removeClass("is-loading")

	// 		let time_to_import_documentary_compliance = data.time_to_import_documentary_compliance;
	// 		$(".time_to_import_documentary_compliance").html(`${time_to_import_documentary_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_import_documentary_compliance.rank} </div>`).removeClass("is-loading")

	// 		let time_to_export_documentary_compliance = data.time_to_export_documentary_compliance;
	// 		$(".time_to_export_documentary_compliance").html(`${time_to_export_documentary_compliance.value} <span class="font-20 font-gg font-weight-500">giờ</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${time_to_export_documentary_compliance.rank} </div>`).removeClass("is-loading")

	// 		let cost_to_import_border_compliance = data.cost_to_import_border_compliance;
	// 		$(".cost_to_import_border_compliance").html(`${numeral(cost_to_import_border_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_import_border_compliance.rank} </div>`).removeClass("is-loading")

	// 		let cost_to_export_border_compliance = data.cost_to_export_border_compliance;
	// 		$(".cost_to_export_border_compliance").html(`${numeral(cost_to_export_border_compliance.value*23000).format("0,0a")} <span class="font-20 font-gg font-weight-500"> VND</span> <div class="font-13 font-gg text-muted mt-1"> hạng #${cost_to_export_border_compliance.rank} </div>`).removeClass("is-loading")
	// 	})
	// }



});
