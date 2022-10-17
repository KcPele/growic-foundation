pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import 'base64-sol/base64.sol';

contract YourCollectible is ERC721, Ownable {


  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  uint256 mintDeadline = block.timestamp + 24 hours;
  mapping (uint256 => string) imageURI;

  constructor() public ERC721("Loogies", "LOOG") {
    // RELEASE THE LOOGIES!
  }

  //second nft
   event CreatedNFT(uint256 indexed tokenId);


    function mintItem(string memory _svg) public returns(uint256){
      require( block.timestamp < mintDeadline, "DONE MINTING");

      uint256 id = _tokenIds.current();
        imageURI[id] = svgToImageURI(_svg);
        _safeMint(msg.sender, id);
       
        emit CreatedNFT(id);
      _tokenIds.increment();
        return id;
    }

    function svgToImageURI(string memory svg) public pure returns (string memory) {
        
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
        return string(abi.encodePacked(baseURL, svgBase64Encoded));
    }

    function _baseURI() internal pure override returns (string memory) {
        return "data:application/json;base64,";
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require (_exists(tokenId), 'None exist');
      
        return
            string(
                abi.encodePacked(
                    _baseURI(),
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                name(), // You can add whatever name here
                                '", "description":"An NFT from kcpele", ',
                                '"attributes": [{"trait_type": "coolness", "value": 100}], "image":"',
                                imageURI[tokenId],
                                '"}'
                            )
                        )
                    )
                )
            );
    }


}
