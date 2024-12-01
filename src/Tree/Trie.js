//Trie là CTDL dạng cây, thiết kế để lưu trữ và tìm kiếm các chuỗi ký tự một các hiệu quả
// gọi prefix tree vì hữu ích khi làm việc với tiền tế prefix

//Đặc điểm:
// - Lưu trữ chuỗi dưới dạng ký tự: mỗi nút là một ký tự (character)
// - Dựa trên cấu trúc tiền tố: 2 chuỗi cùng tiền tố, sẽ dùng chung đường dẫn trong cây
// - Fast search: O(k) - k là độ dài chuỗi => Không phụ thuọc vào số lượng

//Cấu trúc:
//Root: không lưu ký tự nào
//nút con: Mỗi nút 1 ký tự
//Kết thúc: Một nút có thể đánh dẫu chuỗi kết thúc (kết thúc từ)

//Ưu: Tìm kiếm nhanh, tối ưu hóa bài toán autôcmplêt hoặc kiểm tra từ
//Nhược: Phức tạp cài đặt

//Ứng dụng:
//- Tìm kiếm từ điển
//- Autocomplete: Gợi ý từ dựa trên tiền tố người dùng nhập
//- Kiểm tra tiền tố 


class TrieNode{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode() //goc
    }

    //chèn 1 từ
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char] //mỗi char là key của node, ex: 'a': {children, isEnd}
        }
        node.isEnd = true  //Đánh dấu kết thúc từ
    }

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        } 
        return node.isEnd; // chỉ trả về true nếu đây là từ hoàn chỉnh
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}


// Sử dụng Trie
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("care");

console.log(trie.search("cat")); // true
console.log(trie.search("can")); // false
console.log(trie.startsWith("ca")); // true
console.log(trie.startsWith("bat")); // false