///////////////////////////////////////////////////////////
////////////////////바닐라 JS 영역 시작/////////////////////
///////////////////////////////////////////////////////////


/////////// 뷰페이지(=내용 보기 페이지) 이동 시작 ///////////
function read(p1, p2) {
	let param = "Read.jsp?num="+p1+"&nowPage="+p2; 
	location.href=param;
}	
/////////// 뷰페이지(=내용 보기 페이지) 이동 끝 ///////////
	
	
	
//////////////// 리스트페이지 페이징 시작 //////////////////

function movePage(param) {    // 페이지 이동

	let pageNum = param;
	location.href="List.jsp?nowPage="+pageNum;

}


function moveBlock(p1, p2) {    // 블럭 이동

	let pageNum = parseInt(p1);
	let pagePerBlock = parseInt(p2);
	//alert("p1 : " + p1 + "\np2 : " + p2);
	
	location.href="List.jsp?nowPage="+(pagePerBlock*(pageNum-1)+1) ;
	

}



 

//////////////// 리스트페이지 페이징 끝 //////////////////	
	
	

///////////////////////////////////////////////////////////
////////////////////바닐라 JS 영역 끝/////////////////////
///////////////////////////////////////////////////////////
	




$(function(){
	
	//////////////// 게시글 등록 시작 //////////////////
	$("#regBtn").click(function(){
		let uName = $("#uName").val().trim();
		let subject = $("#subject").val().trim();
		let uPw = $("#uPw").val().trim();
		
		if (uName == "") {
			alert("성명은 필수입력입니다.");
			$("#uName").focus();
		} else if (subject == "") {
			alert("제목은 필수입력입니다.");
			$("#subject").focus();
		} else if (uPw == "") {
			alert("비밀번호는 필수입력입니다.");
			$("#uPw").focus();
		} else {
			$("#postFrm").submit();
		}
	
	});	
	//////////////// 게시글 등록 끝 //////////////////
	
	
	
	
	
	//////////////// 리스트페이지 이동 시작 //////////////////
	$("#listBtn").click(function(){
		let param = $("#nowPage").val().trim();
		let url = "/Proj_Ch14_BBS/bbs/List.jsp?nowPage=" + param;
		location.href=url;
	});
	//////////////// 리스트페이지 이동 끝 //////////////////
	

	
	
	
	
	
	
	
	//////////////// 파일다운로드(Read.jsp) 시작 //////////////////
	$("span#downloadFile").click(function(){
		let fName = $("input#hiddenFname").val().trim();
		location.href="/Proj_Ch14_BBS/bbs/Download.jsp?fileName=" + fName;
	});
	//////////////// 파일다운로드(Read.jsp) 끝 //////////////////
	
	
	
	//////////////// Read.jsp 에서 게시글 삭제버튼 시작 //////////////////
	$("button#delBtn").click(function(){
		let nowPage = $("input#nowPage").val().trim();
		let num = $("input#num").val().trim();
		let url = "/Proj_Ch14_BBS/bbs/Delete.jsp?";
			url += "num="+num+"&nowPage="+nowPage;
		location.href=url;
	});
	//////////////// Read.jsp 에서 게시글 삭제버튼 끝 //////////////////
	
	
	
	//////////////// Read.jsp 에서 게시글 수정버튼 시작 //////////////////
	$("button#modBtn").click(function(){
	
		let nowPage = $("input#nowPage").val().trim();
		let num = $("input#num").val().trim();
	
		let url = "/Proj_Ch14_BBS/bbs/Update.jsp?";
			url += "num="+num+"&nowPage="+nowPage;
		location.href=url;
	});
	//////////////// Read.jsp 에서 게시글 수정버튼 끝 //////////////////
	
	
	
	
	//////////////// Delete.jsp 에서 게시글 삭제실행 시작 //////////////////
	
	
	$("button#delSbmBtn").click(function(){
		let uPw = $("input#uPw").val().trim();
		
		if(uPw == "") {
			$("input#uPw").focus();
			return;
		} else {
		
			let delChk = confirm("게시물을 삭제합니다.");
			if(delChk) {
				$("#delFrm").submit();
			} else {
				alert("삭제를 취소하셨습니다.");
				return;
			}
			
		}
		
	});
	$("button#backBtn").click(function(){
		history.back();
	});
	//////////////// Delete.jsp 에서 게시글 삭제실행 끝 //////////////////
	
	
	
	
	//////////////// 게시글 수정 시작 //////////////////
	$("#modBtn").click(function(){
		let uName = $("#uName").val().trim();
		let subject = $("#subject").val().trim();
		let uPw = $("#uPw").val().trim();
		
		if (uName == "") {
			alert("성명은 필수입력입니다.");
			$("#uName").focus();
		} else if (subject == "") {
			alert("제목은 필수입력입니다.");
			$("#subject").focus();
		} else if (uPw == "") {
			alert("비밀번호는 필수입력입니다.");
			$("#uPw").focus();
		} else {
			$("#updateFrm").submit();
		}
	
	});	
	//////////////// 게시글 수정 끝 //////////////////
	
	
	
	
	
});

