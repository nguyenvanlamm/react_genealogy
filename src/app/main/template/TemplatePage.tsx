import React, { MouseEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { MapInteractionCSS } from "react-map-interaction";

import dataJson from "./genealogies.json";
import { Button } from "@mui/material";
import { id } from "date-fns/locale";
import { set } from "lodash";
import { usePositionData } from "src/app/stores/hooks";

const TemplatePage = (props: any) => {
  const [layers, setLayers] = React.useState([] as any);
  const [idActive, setActive] = React.useState("-1");
  const [ids, setIds] = React.useState([]);
  const [containerItems, setContainerItems] = React.useState('' as any);
  const [data, setData] = React.useState(dataJson as any);
  const [positionData, setPositionData] = usePositionData();

  let dataPositionTmp = {};

  function getAllChildrenId(parentId: any) {
    let roots = data.filter((e) => e.father === parentId);
    const husband = data.filter((e) => e.husband === parentId);
    roots = roots.concat(husband);
    data.forEach((item) => {
      if (roots.filter((e) => e.code === item.husband).length > 0) {
        roots.push(item);
      }
    });
    if (roots.length > 0) {
      roots.forEach((item) => {
        const children = getAllChildrenId(item.code);
        if (children.length > 0) {
          children.forEach((item2) => {
            roots.push(item2);
          });
        }
      });
    }
    return roots;
  }

  function getAllParentId(id: any) {
    let parentId = data.filter((e) => e.code === id)[0].father;
    if (parentId === null) {
      return [];
    }
    let roots = data.filter((e) => e.code === parentId);
    const husband = data.filter((e) => e.husband === parentId);
    roots = roots.concat(husband);
    // data.forEach((item) => {
    //   if (roots.filter((e) => e.code === item.husband).length > 0) {
    //     roots.push(item);
    //   }
    // });
    if (roots.length > 0) {
      for (let i = 0; i < roots.length; i++) {
        const children = getAllParentId(roots[i].code);
        if (children.length > 0) {
          children.forEach((item2) => {
            roots.push(item2);
          });
        }
      }
    }
    return roots;
  }

  function getChildren(parentId: any) {
    const children = [];
    let count = 0;
    const roots = data.filter((e) => e.father === parentId);
    roots.forEach((item) => {
      let couple = [item];
      data.forEach((item2) => {
        if (item2.husband === item.code) {
          couple.push(item2);
        }
      });
      count += couple.length;
      children.push(couple);
    });
    return { children, count };
  }


  function getCoupleElements(itemsCouple: any) {
    return (
      <div className="relative flex items-center gap-[16px]" id={`couple${itemsCouple[0].code}`}>
        {itemsCouple.length !== 3 ? itemsCouple.map((item: any) => {
          return (
            <PersonItem item={item}></PersonItem>
          );
        }) : <><PersonItem item={itemsCouple[2]}></PersonItem><PersonItem item={itemsCouple[0]}></PersonItem><PersonItem item={itemsCouple[1]}></PersonItem></>}
        {itemsCouple.length === 2 ? <div className="absolute left-[50%] ml-[-8px] ">
          <div className="mb-[6px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_217_1449)">
                <path d="M8.45691 4.37744C8.40508 4.37744 8.35412 4.36396 8.30834 4.337C5.88196 2.92167 5.94156 1.55183 6.07977 1.02866C6.23525 0.441467 6.71292 0.0185517 7.2407 0.000860088C7.82116 -0.0218863 8.21419 0.212318 8.45691 0.465898C8.69964 0.212318 9.0892 -0.0218863 9.67312 0.000860088C10.2018 0.0185517 10.6786 0.441467 10.8341 1.02866C10.9723 1.55183 11.0319 2.92083 8.60548 4.337C8.5597 4.36396 8.50787 4.37744 8.45691 4.37744ZM7.30894 0.565308C7.29253 0.565308 7.27698 0.565308 7.2597 0.566151C7.02907 0.573733 6.74143 0.784348 6.6395 1.17104C6.55917 1.47601 6.45983 2.54677 8.45605 3.76497C10.4523 2.54677 10.3529 1.47601 10.2726 1.17104C10.1707 0.784348 9.88302 0.573733 9.65239 0.566151C8.93804 0.540877 8.7316 1.07078 8.729 1.07584C8.68841 1.18873 8.5787 1.26539 8.45605 1.26539C8.33253 1.26539 8.22282 1.18957 8.18309 1.07584C8.16322 1.02529 7.96714 0.565308 7.30894 0.565308Z" fill="#9E2B25" />
                <path d="M7.37118 2.46331C7.31331 2.46331 7.25544 2.43804 7.21743 2.38917C6.91424 1.99996 6.81231 1.63012 6.91424 1.28892C7.01271 0.960362 7.30899 0.828939 7.46879 0.802822C7.57331 0.785973 7.67351 0.855055 7.69078 0.957835C7.70806 1.05977 7.63809 1.15581 7.53444 1.17435C7.52235 1.17687 7.33836 1.21479 7.2848 1.39507C7.21829 1.61832 7.2969 1.86938 7.52494 2.16255C7.58972 2.24511 7.57331 2.36306 7.48779 2.42624C7.45238 2.45067 7.41178 2.46331 7.37118 2.46331Z" fill="#9E2B25" />
                <path d="M4.33535 12.2915C1.94525 12.2915 0 10.3942 0 8.06315C0 5.73122 1.94525 3.83484 4.33535 3.83484C5.13953 3.83484 5.92472 4.05135 6.60625 4.46079C6.78764 4.56946 6.84465 4.80198 6.73236 4.9789C6.62093 5.15582 6.38252 5.21142 6.20113 5.1019C5.64139 4.76576 4.99615 4.588 4.33535 4.588C2.37023 4.588 0.772226 6.14739 0.772226 8.06315C0.772226 9.97974 2.3711 11.5383 4.33535 11.5383C6.30046 11.5383 7.89847 9.9789 7.89847 8.06315C7.89847 7.4591 7.73694 6.86348 7.43203 6.34284C7.32664 6.16256 7.39056 5.93256 7.57628 5.82894C7.76199 5.72616 7.99781 5.7885 8.10319 5.96963C8.47462 6.60485 8.67156 7.32852 8.67156 8.06399C8.67156 10.3942 6.72631 12.2915 4.33535 12.2915Z" fill="#9E2B25" />
                <path d="M8.79356 13C8.41263 13 8.03515 12.9503 7.6715 12.8526C7.46592 12.797 7.34499 12.5897 7.402 12.3892C7.45901 12.1887 7.6715 12.0708 7.87708 12.1264C8.17422 12.2064 8.4826 12.2468 8.79356 12.2468C10.687 12.2468 12.228 10.7439 12.228 8.89721C12.228 7.05054 10.687 5.54759 8.79356 5.54759C6.90014 5.54759 5.35914 7.05054 5.35914 8.89721C5.35914 9.37489 5.4602 9.83656 5.65887 10.2679C5.74612 10.4574 5.65974 10.6807 5.46452 10.7658C5.27017 10.8509 5.04127 10.7666 4.95402 10.5762C4.71044 10.0472 4.58691 9.48188 4.58691 8.89721C4.58691 6.63521 6.47429 4.79443 8.79356 4.79443C11.1128 4.79443 13.0002 6.63521 13.0002 8.89721C13.0002 11.1601 11.1137 13 8.79356 13Z" fill="#9E2B25" />
              </g>
              <defs>
                <clipPath id="clip0_217_1449">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none">
            <path d="M15.8222 1.7778H14.4C14.3004 1.7778 14.2222 1.69957 14.2222 1.60002C14.2222 1.50046 14.3004 1.42224 14.4 1.42224H15.8222C15.9218 1.42224 16 1.50046 16 1.60002C16 1.69957 15.9218 1.7778 15.8222 1.7778ZM12.9778 1.7778H11.5556C11.456 1.7778 11.3778 1.69957 11.3778 1.60002C11.3778 1.50046 11.456 1.42224 11.5556 1.42224H12.9778C13.0773 1.42224 13.1556 1.50046 13.1556 1.60002C13.1556 1.69957 13.0773 1.7778 12.9778 1.7778ZM10.1333 1.7778H8.71111C8.61156 1.7778 8.53333 1.69957 8.53333 1.60002C8.53333 1.50046 8.61156 1.42224 8.71111 1.42224H10.1333C10.2329 1.42224 10.3111 1.50046 10.3111 1.60002C10.3111 1.69957 10.2329 1.7778 10.1333 1.7778ZM7.28889 1.7778H5.86667C5.76711 1.7778 5.68889 1.69957 5.68889 1.60002C5.68889 1.50046 5.76711 1.42224 5.86667 1.42224H7.28889C7.38844 1.42224 7.46667 1.50046 7.46667 1.60002C7.46667 1.69957 7.38844 1.7778 7.28889 1.7778ZM4.44444 1.7778H3.02222C2.92267 1.7778 2.84444 1.69957 2.84444 1.60002C2.84444 1.50046 2.92267 1.42224 3.02222 1.42224H4.44444C4.544 1.42224 4.62222 1.50046 4.62222 1.60002C4.62222 1.69957 4.544 1.7778 4.44444 1.7778ZM1.6 1.7778H0.177778C0.0782222 1.7778 0 1.69957 0 1.60002C0 1.50046 0.0782222 1.42224 0.177778 1.42224H1.6C1.69956 1.42224 1.77778 1.50046 1.77778 1.60002C1.77778 1.69957 1.69956 1.7778 1.6 1.7778Z" fill="#570D0C" />
            <path d="M6.89063 2.84589L9.60352 2.84589V0.132997L6.89063 0.132997V2.84589Z" fill="#FFF8F1" />
            <path d="M9.60386 2.97956H6.89097C6.8163 2.97956 6.75586 2.91911 6.75586 2.84444V0.135111C6.75586 0.0604444 6.8163 0 6.89097 0H9.60386C9.67853 0 9.73897 0.0604444 9.73897 0.135111V2.848C9.73897 2.92267 9.67853 2.97956 9.60386 2.97956ZM7.02253 2.71289H9.46875V0.266667H7.02253V2.71289Z" fill="#570D0C" />
          </svg>
        </div> : ""}
        {itemsCouple.length === 3 ? <div className="absolute left-[32.3%] ml-[-8px] ">
          <div className="mb-[6px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_217_1449)">
                <path d="M8.45691 4.37744C8.40508 4.37744 8.35412 4.36396 8.30834 4.337C5.88196 2.92167 5.94156 1.55183 6.07977 1.02866C6.23525 0.441467 6.71292 0.0185517 7.2407 0.000860088C7.82116 -0.0218863 8.21419 0.212318 8.45691 0.465898C8.69964 0.212318 9.0892 -0.0218863 9.67312 0.000860088C10.2018 0.0185517 10.6786 0.441467 10.8341 1.02866C10.9723 1.55183 11.0319 2.92083 8.60548 4.337C8.5597 4.36396 8.50787 4.37744 8.45691 4.37744ZM7.30894 0.565308C7.29253 0.565308 7.27698 0.565308 7.2597 0.566151C7.02907 0.573733 6.74143 0.784348 6.6395 1.17104C6.55917 1.47601 6.45983 2.54677 8.45605 3.76497C10.4523 2.54677 10.3529 1.47601 10.2726 1.17104C10.1707 0.784348 9.88302 0.573733 9.65239 0.566151C8.93804 0.540877 8.7316 1.07078 8.729 1.07584C8.68841 1.18873 8.5787 1.26539 8.45605 1.26539C8.33253 1.26539 8.22282 1.18957 8.18309 1.07584C8.16322 1.02529 7.96714 0.565308 7.30894 0.565308Z" fill="#9E2B25" />
                <path d="M7.37118 2.46331C7.31331 2.46331 7.25544 2.43804 7.21743 2.38917C6.91424 1.99996 6.81231 1.63012 6.91424 1.28892C7.01271 0.960362 7.30899 0.828939 7.46879 0.802822C7.57331 0.785973 7.67351 0.855055 7.69078 0.957835C7.70806 1.05977 7.63809 1.15581 7.53444 1.17435C7.52235 1.17687 7.33836 1.21479 7.2848 1.39507C7.21829 1.61832 7.2969 1.86938 7.52494 2.16255C7.58972 2.24511 7.57331 2.36306 7.48779 2.42624C7.45238 2.45067 7.41178 2.46331 7.37118 2.46331Z" fill="#9E2B25" />
                <path d="M4.33535 12.2915C1.94525 12.2915 0 10.3942 0 8.06315C0 5.73122 1.94525 3.83484 4.33535 3.83484C5.13953 3.83484 5.92472 4.05135 6.60625 4.46079C6.78764 4.56946 6.84465 4.80198 6.73236 4.9789C6.62093 5.15582 6.38252 5.21142 6.20113 5.1019C5.64139 4.76576 4.99615 4.588 4.33535 4.588C2.37023 4.588 0.772226 6.14739 0.772226 8.06315C0.772226 9.97974 2.3711 11.5383 4.33535 11.5383C6.30046 11.5383 7.89847 9.9789 7.89847 8.06315C7.89847 7.4591 7.73694 6.86348 7.43203 6.34284C7.32664 6.16256 7.39056 5.93256 7.57628 5.82894C7.76199 5.72616 7.99781 5.7885 8.10319 5.96963C8.47462 6.60485 8.67156 7.32852 8.67156 8.06399C8.67156 10.3942 6.72631 12.2915 4.33535 12.2915Z" fill="#9E2B25" />
                <path d="M8.79356 13C8.41263 13 8.03515 12.9503 7.6715 12.8526C7.46592 12.797 7.34499 12.5897 7.402 12.3892C7.45901 12.1887 7.6715 12.0708 7.87708 12.1264C8.17422 12.2064 8.4826 12.2468 8.79356 12.2468C10.687 12.2468 12.228 10.7439 12.228 8.89721C12.228 7.05054 10.687 5.54759 8.79356 5.54759C6.90014 5.54759 5.35914 7.05054 5.35914 8.89721C5.35914 9.37489 5.4602 9.83656 5.65887 10.2679C5.74612 10.4574 5.65974 10.6807 5.46452 10.7658C5.27017 10.8509 5.04127 10.7666 4.95402 10.5762C4.71044 10.0472 4.58691 9.48188 4.58691 8.89721C4.58691 6.63521 6.47429 4.79443 8.79356 4.79443C11.1128 4.79443 13.0002 6.63521 13.0002 8.89721C13.0002 11.1601 11.1137 13 8.79356 13Z" fill="#9E2B25" />
              </g>
              <defs>
                <clipPath id="clip0_217_1449">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none">
            <path d="M15.8222 1.7778H14.4C14.3004 1.7778 14.2222 1.69957 14.2222 1.60002C14.2222 1.50046 14.3004 1.42224 14.4 1.42224H15.8222C15.9218 1.42224 16 1.50046 16 1.60002C16 1.69957 15.9218 1.7778 15.8222 1.7778ZM12.9778 1.7778H11.5556C11.456 1.7778 11.3778 1.69957 11.3778 1.60002C11.3778 1.50046 11.456 1.42224 11.5556 1.42224H12.9778C13.0773 1.42224 13.1556 1.50046 13.1556 1.60002C13.1556 1.69957 13.0773 1.7778 12.9778 1.7778ZM10.1333 1.7778H8.71111C8.61156 1.7778 8.53333 1.69957 8.53333 1.60002C8.53333 1.50046 8.61156 1.42224 8.71111 1.42224H10.1333C10.2329 1.42224 10.3111 1.50046 10.3111 1.60002C10.3111 1.69957 10.2329 1.7778 10.1333 1.7778ZM7.28889 1.7778H5.86667C5.76711 1.7778 5.68889 1.69957 5.68889 1.60002C5.68889 1.50046 5.76711 1.42224 5.86667 1.42224H7.28889C7.38844 1.42224 7.46667 1.50046 7.46667 1.60002C7.46667 1.69957 7.38844 1.7778 7.28889 1.7778ZM4.44444 1.7778H3.02222C2.92267 1.7778 2.84444 1.69957 2.84444 1.60002C2.84444 1.50046 2.92267 1.42224 3.02222 1.42224H4.44444C4.544 1.42224 4.62222 1.50046 4.62222 1.60002C4.62222 1.69957 4.544 1.7778 4.44444 1.7778ZM1.6 1.7778H0.177778C0.0782222 1.7778 0 1.69957 0 1.60002C0 1.50046 0.0782222 1.42224 0.177778 1.42224H1.6C1.69956 1.42224 1.77778 1.50046 1.77778 1.60002C1.77778 1.69957 1.69956 1.7778 1.6 1.7778Z" fill="#570D0C" />
            <path d="M6.89063 2.84589L9.60352 2.84589V0.132997L6.89063 0.132997V2.84589Z" fill="#FFF8F1" />
            <path d="M9.60386 2.97956H6.89097C6.8163 2.97956 6.75586 2.91911 6.75586 2.84444V0.135111C6.75586 0.0604444 6.8163 0 6.89097 0H9.60386C9.67853 0 9.73897 0.0604444 9.73897 0.135111V2.848C9.73897 2.92267 9.67853 2.97956 9.60386 2.97956ZM7.02253 2.71289H9.46875V0.266667H7.02253V2.71289Z" fill="#570D0C" />
          </svg>
        </div> : ""}
        {itemsCouple.length === 3 ? <div className="absolute left-[67.8%] ml-[-8px] ">
          <div className="mb-[6px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_217_1449)">
                <path d="M8.45691 4.37744C8.40508 4.37744 8.35412 4.36396 8.30834 4.337C5.88196 2.92167 5.94156 1.55183 6.07977 1.02866C6.23525 0.441467 6.71292 0.0185517 7.2407 0.000860088C7.82116 -0.0218863 8.21419 0.212318 8.45691 0.465898C8.69964 0.212318 9.0892 -0.0218863 9.67312 0.000860088C10.2018 0.0185517 10.6786 0.441467 10.8341 1.02866C10.9723 1.55183 11.0319 2.92083 8.60548 4.337C8.5597 4.36396 8.50787 4.37744 8.45691 4.37744ZM7.30894 0.565308C7.29253 0.565308 7.27698 0.565308 7.2597 0.566151C7.02907 0.573733 6.74143 0.784348 6.6395 1.17104C6.55917 1.47601 6.45983 2.54677 8.45605 3.76497C10.4523 2.54677 10.3529 1.47601 10.2726 1.17104C10.1707 0.784348 9.88302 0.573733 9.65239 0.566151C8.93804 0.540877 8.7316 1.07078 8.729 1.07584C8.68841 1.18873 8.5787 1.26539 8.45605 1.26539C8.33253 1.26539 8.22282 1.18957 8.18309 1.07584C8.16322 1.02529 7.96714 0.565308 7.30894 0.565308Z" fill="#9E2B25" />
                <path d="M7.37118 2.46331C7.31331 2.46331 7.25544 2.43804 7.21743 2.38917C6.91424 1.99996 6.81231 1.63012 6.91424 1.28892C7.01271 0.960362 7.30899 0.828939 7.46879 0.802822C7.57331 0.785973 7.67351 0.855055 7.69078 0.957835C7.70806 1.05977 7.63809 1.15581 7.53444 1.17435C7.52235 1.17687 7.33836 1.21479 7.2848 1.39507C7.21829 1.61832 7.2969 1.86938 7.52494 2.16255C7.58972 2.24511 7.57331 2.36306 7.48779 2.42624C7.45238 2.45067 7.41178 2.46331 7.37118 2.46331Z" fill="#9E2B25" />
                <path d="M4.33535 12.2915C1.94525 12.2915 0 10.3942 0 8.06315C0 5.73122 1.94525 3.83484 4.33535 3.83484C5.13953 3.83484 5.92472 4.05135 6.60625 4.46079C6.78764 4.56946 6.84465 4.80198 6.73236 4.9789C6.62093 5.15582 6.38252 5.21142 6.20113 5.1019C5.64139 4.76576 4.99615 4.588 4.33535 4.588C2.37023 4.588 0.772226 6.14739 0.772226 8.06315C0.772226 9.97974 2.3711 11.5383 4.33535 11.5383C6.30046 11.5383 7.89847 9.9789 7.89847 8.06315C7.89847 7.4591 7.73694 6.86348 7.43203 6.34284C7.32664 6.16256 7.39056 5.93256 7.57628 5.82894C7.76199 5.72616 7.99781 5.7885 8.10319 5.96963C8.47462 6.60485 8.67156 7.32852 8.67156 8.06399C8.67156 10.3942 6.72631 12.2915 4.33535 12.2915Z" fill="#9E2B25" />
                <path d="M8.79356 13C8.41263 13 8.03515 12.9503 7.6715 12.8526C7.46592 12.797 7.34499 12.5897 7.402 12.3892C7.45901 12.1887 7.6715 12.0708 7.87708 12.1264C8.17422 12.2064 8.4826 12.2468 8.79356 12.2468C10.687 12.2468 12.228 10.7439 12.228 8.89721C12.228 7.05054 10.687 5.54759 8.79356 5.54759C6.90014 5.54759 5.35914 7.05054 5.35914 8.89721C5.35914 9.37489 5.4602 9.83656 5.65887 10.2679C5.74612 10.4574 5.65974 10.6807 5.46452 10.7658C5.27017 10.8509 5.04127 10.7666 4.95402 10.5762C4.71044 10.0472 4.58691 9.48188 4.58691 8.89721C4.58691 6.63521 6.47429 4.79443 8.79356 4.79443C11.1128 4.79443 13.0002 6.63521 13.0002 8.89721C13.0002 11.1601 11.1137 13 8.79356 13Z" fill="#9E2B25" />
              </g>
              <defs>
                <clipPath id="clip0_217_1449">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none">
            <path d="M15.8222 1.7778H14.4C14.3004 1.7778 14.2222 1.69957 14.2222 1.60002C14.2222 1.50046 14.3004 1.42224 14.4 1.42224H15.8222C15.9218 1.42224 16 1.50046 16 1.60002C16 1.69957 15.9218 1.7778 15.8222 1.7778ZM12.9778 1.7778H11.5556C11.456 1.7778 11.3778 1.69957 11.3778 1.60002C11.3778 1.50046 11.456 1.42224 11.5556 1.42224H12.9778C13.0773 1.42224 13.1556 1.50046 13.1556 1.60002C13.1556 1.69957 13.0773 1.7778 12.9778 1.7778ZM10.1333 1.7778H8.71111C8.61156 1.7778 8.53333 1.69957 8.53333 1.60002C8.53333 1.50046 8.61156 1.42224 8.71111 1.42224H10.1333C10.2329 1.42224 10.3111 1.50046 10.3111 1.60002C10.3111 1.69957 10.2329 1.7778 10.1333 1.7778ZM7.28889 1.7778H5.86667C5.76711 1.7778 5.68889 1.69957 5.68889 1.60002C5.68889 1.50046 5.76711 1.42224 5.86667 1.42224H7.28889C7.38844 1.42224 7.46667 1.50046 7.46667 1.60002C7.46667 1.69957 7.38844 1.7778 7.28889 1.7778ZM4.44444 1.7778H3.02222C2.92267 1.7778 2.84444 1.69957 2.84444 1.60002C2.84444 1.50046 2.92267 1.42224 3.02222 1.42224H4.44444C4.544 1.42224 4.62222 1.50046 4.62222 1.60002C4.62222 1.69957 4.544 1.7778 4.44444 1.7778ZM1.6 1.7778H0.177778C0.0782222 1.7778 0 1.69957 0 1.60002C0 1.50046 0.0782222 1.42224 0.177778 1.42224H1.6C1.69956 1.42224 1.77778 1.50046 1.77778 1.60002C1.77778 1.69957 1.69956 1.7778 1.6 1.7778Z" fill="#570D0C" />
            <path d="M6.89063 2.84589L9.60352 2.84589V0.132997L6.89063 0.132997V2.84589Z" fill="#FFF8F1" />
            <path d="M9.60386 2.97956H6.89097C6.8163 2.97956 6.75586 2.91911 6.75586 2.84444V0.135111C6.75586 0.0604444 6.8163 0 6.89097 0H9.60386C9.67853 0 9.73897 0.0604444 9.73897 0.135111V2.848C9.73897 2.92267 9.67853 2.97956 9.60386 2.97956ZM7.02253 2.71289H9.46875V0.266667H7.02253V2.71289Z" fill="#570D0C" />
          </svg>
        </div> : ""}

      </div>
    );
  }

  function getCoupleElementsSpecial(itemsCouple: any) {

    return (
      <div className="relative flex items-center gap-[85px]">
        {itemsCouple.map((item: any) => {
          return (
            <PersonItemSpecial item={item}></PersonItemSpecial>
          );
        })}
        <div style={{ backgroundImage: `linear-gradient(to right, #570D0C 0%, #570D0C 60%, transparent 40%)` }} className="absolute border-dashed rotate-90 w-[230px] ml-[-115px] mb-[-115px] bottom-[50%] left-[50%] ">

        </div>
        {itemsCouple.length === 2 ? <div className="absolute w-[85px] left-[50%] ml-[-42.5px] ">
          <div className="mt-[-50%] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <g clip-path="url(#clip0_241_17140)">
                <path d="M18.2137 9.76503C18.1021 9.76503 17.9923 9.73496 17.8937 9.67482C12.6676 6.51754 12.796 3.46174 13.0937 2.29468C13.4286 0.984782 14.4574 0.0413565 15.5941 0.00189049C16.8444 -0.0488515 17.6909 0.473603 18.2137 1.03928C18.7365 0.473603 19.5755 -0.0488515 20.8332 0.00189049C21.9718 0.0413565 22.9988 0.984782 23.3337 2.29468C23.6314 3.46174 23.7597 6.51566 18.5337 9.67482C18.4351 9.73496 18.3235 9.76503 18.2137 9.76503ZM15.7411 1.26104C15.7058 1.26104 15.6723 1.26104 15.6351 1.26292C15.1383 1.27984 14.5188 1.74967 14.2993 2.61229C14.1262 3.2926 13.9123 5.68124 18.2118 8.39875C22.5114 5.68124 22.2974 3.2926 22.1244 2.61229C21.9048 1.74967 21.2853 1.27984 20.7886 1.26292C19.25 1.20654 18.8053 2.38864 18.7997 2.39992C18.7123 2.65175 18.476 2.82277 18.2118 2.82277C17.9458 2.82277 17.7095 2.65363 17.6239 2.39992C17.5811 2.28716 17.1588 1.26104 15.7411 1.26104Z" fill="#9E2B25" />
                <path d="M15.8771 5.49515C15.7525 5.49515 15.6278 5.43877 15.546 5.32977C14.893 4.46152 14.6734 3.63649 14.893 2.87536C15.1051 2.14242 15.7432 1.84924 16.0874 1.79098C16.3125 1.7534 16.5283 1.9075 16.5655 2.13678C16.6027 2.36418 16.452 2.57842 16.2288 2.61977C16.2027 2.62541 15.8064 2.70998 15.6911 3.11215C15.5478 3.61018 15.7171 4.17022 16.2083 4.82423C16.3478 5.0084 16.3125 5.27151 16.1283 5.41246C16.052 5.46696 15.9646 5.49515 15.8771 5.49515Z" fill="#9E2B25" />
                <path d="M9.33767 27.4194C4.18977 27.4194 0 23.1872 0 17.9871C0 12.7851 4.18977 8.55469 9.33767 8.55469C11.0698 8.55469 12.7609 9.03768 14.2288 9.95103C14.6195 10.1935 14.7423 10.7122 14.5005 11.1068C14.2605 11.5015 13.747 11.6255 13.3563 11.3812C12.1507 10.6314 10.7609 10.2348 9.33767 10.2348C5.10512 10.2348 1.66326 13.7135 1.66326 17.9871C1.66326 22.2625 5.10698 25.7393 9.33767 25.7393C13.5702 25.7393 17.0121 22.2607 17.0121 17.9871C17.0121 16.6396 16.6642 15.3109 16.0074 14.1495C15.7805 13.7473 15.9181 13.2342 16.3181 13.0031C16.7181 12.7738 17.226 12.9129 17.453 13.3169C18.253 14.7339 18.6772 16.3483 18.6772 17.9889C18.6772 23.1872 14.4874 27.4194 9.33767 27.4194Z" fill="#9E2B25" />
                <path d="M18.9394 29C18.1189 29 17.3059 28.8891 16.5226 28.6711C16.0798 28.547 15.8194 28.0847 15.9422 27.6374C16.065 27.1902 16.5226 26.9271 16.9654 27.0511C17.6054 27.2296 18.2696 27.3198 18.9394 27.3198C23.0175 27.3198 26.3366 23.9671 26.3366 19.8476C26.3366 15.7281 23.0175 12.3754 18.9394 12.3754C14.8612 12.3754 11.5422 15.7281 11.5422 19.8476C11.5422 20.9132 11.7598 21.9431 12.1877 22.9053C12.3757 23.3281 12.1896 23.8262 11.7691 24.016C11.3505 24.2058 10.8575 24.0178 10.6696 23.5931C10.145 22.4129 9.87891 21.1519 9.87891 19.8476C9.87891 14.8016 13.944 10.6953 18.9394 10.6953C23.9347 10.6953 27.9998 14.8016 27.9998 19.8476C27.9998 24.8955 23.9366 29 18.9394 29Z" fill="#9E2B25" />
              </g>
              <defs>
                <clipPath id="clip0_241_17140">
                  <rect width="28" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={{ backgroundImage: `linear-gradient(to right, #570D0C 0%, #570D0C 60%, transparent 40%)` }} className="absolute border-dashed  w-full bottom-[50%]">

          </div>
        </div> : ""}
        {itemsCouple.length === 3 ? <div className="absolute left-[32.3%] ml-[-8px] ">
          <div className="mb-[6px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <g clip-path="url(#clip0_241_17140)">
                <path d="M18.2137 9.76503C18.1021 9.76503 17.9923 9.73496 17.8937 9.67482C12.6676 6.51754 12.796 3.46174 13.0937 2.29468C13.4286 0.984782 14.4574 0.0413565 15.5941 0.00189049C16.8444 -0.0488515 17.6909 0.473603 18.2137 1.03928C18.7365 0.473603 19.5755 -0.0488515 20.8332 0.00189049C21.9718 0.0413565 22.9988 0.984782 23.3337 2.29468C23.6314 3.46174 23.7597 6.51566 18.5337 9.67482C18.4351 9.73496 18.3235 9.76503 18.2137 9.76503ZM15.7411 1.26104C15.7058 1.26104 15.6723 1.26104 15.6351 1.26292C15.1383 1.27984 14.5188 1.74967 14.2993 2.61229C14.1262 3.2926 13.9123 5.68124 18.2118 8.39875C22.5114 5.68124 22.2974 3.2926 22.1244 2.61229C21.9048 1.74967 21.2853 1.27984 20.7886 1.26292C19.25 1.20654 18.8053 2.38864 18.7997 2.39992C18.7123 2.65175 18.476 2.82277 18.2118 2.82277C17.9458 2.82277 17.7095 2.65363 17.6239 2.39992C17.5811 2.28716 17.1588 1.26104 15.7411 1.26104Z" fill="#9E2B25" />
                <path d="M15.8771 5.49515C15.7525 5.49515 15.6278 5.43877 15.546 5.32977C14.893 4.46152 14.6734 3.63649 14.893 2.87536C15.1051 2.14242 15.7432 1.84924 16.0874 1.79098C16.3125 1.7534 16.5283 1.9075 16.5655 2.13678C16.6027 2.36418 16.452 2.57842 16.2288 2.61977C16.2027 2.62541 15.8064 2.70998 15.6911 3.11215C15.5478 3.61018 15.7171 4.17022 16.2083 4.82423C16.3478 5.0084 16.3125 5.27151 16.1283 5.41246C16.052 5.46696 15.9646 5.49515 15.8771 5.49515Z" fill="#9E2B25" />
                <path d="M9.33767 27.4194C4.18977 27.4194 0 23.1872 0 17.9871C0 12.7851 4.18977 8.55469 9.33767 8.55469C11.0698 8.55469 12.7609 9.03768 14.2288 9.95103C14.6195 10.1935 14.7423 10.7122 14.5005 11.1068C14.2605 11.5015 13.747 11.6255 13.3563 11.3812C12.1507 10.6314 10.7609 10.2348 9.33767 10.2348C5.10512 10.2348 1.66326 13.7135 1.66326 17.9871C1.66326 22.2625 5.10698 25.7393 9.33767 25.7393C13.5702 25.7393 17.0121 22.2607 17.0121 17.9871C17.0121 16.6396 16.6642 15.3109 16.0074 14.1495C15.7805 13.7473 15.9181 13.2342 16.3181 13.0031C16.7181 12.7738 17.226 12.9129 17.453 13.3169C18.253 14.7339 18.6772 16.3483 18.6772 17.9889C18.6772 23.1872 14.4874 27.4194 9.33767 27.4194Z" fill="#9E2B25" />
                <path d="M18.9394 29C18.1189 29 17.3059 28.8891 16.5226 28.6711C16.0798 28.547 15.8194 28.0847 15.9422 27.6374C16.065 27.1902 16.5226 26.9271 16.9654 27.0511C17.6054 27.2296 18.2696 27.3198 18.9394 27.3198C23.0175 27.3198 26.3366 23.9671 26.3366 19.8476C26.3366 15.7281 23.0175 12.3754 18.9394 12.3754C14.8612 12.3754 11.5422 15.7281 11.5422 19.8476C11.5422 20.9132 11.7598 21.9431 12.1877 22.9053C12.3757 23.3281 12.1896 23.8262 11.7691 24.016C11.3505 24.2058 10.8575 24.0178 10.6696 23.5931C10.145 22.4129 9.87891 21.1519 9.87891 19.8476C9.87891 14.8016 13.944 10.6953 18.9394 10.6953C23.9347 10.6953 27.9998 14.8016 27.9998 19.8476C27.9998 24.8955 23.9366 29 18.9394 29Z" fill="#9E2B25" />
              </g>
              <defs>
                <clipPath id="clip0_241_17140">
                  <rect width="28" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={{ backgroundImage: `linear-gradient(to right, #570D0C 0%, #570D0C 60%, transparent 40%)` }} className="absolute border-dashed  w-full bottom-[50%]">

          </div>
        </div> : ""}
        {itemsCouple.length === 3 ? <div className="absolute left-[67.8%] ml-[-8px] ">
          <div className="mb-[6px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <g clip-path="url(#clip0_241_17140)">
                <path d="M18.2137 9.76503C18.1021 9.76503 17.9923 9.73496 17.8937 9.67482C12.6676 6.51754 12.796 3.46174 13.0937 2.29468C13.4286 0.984782 14.4574 0.0413565 15.5941 0.00189049C16.8444 -0.0488515 17.6909 0.473603 18.2137 1.03928C18.7365 0.473603 19.5755 -0.0488515 20.8332 0.00189049C21.9718 0.0413565 22.9988 0.984782 23.3337 2.29468C23.6314 3.46174 23.7597 6.51566 18.5337 9.67482C18.4351 9.73496 18.3235 9.76503 18.2137 9.76503ZM15.7411 1.26104C15.7058 1.26104 15.6723 1.26104 15.6351 1.26292C15.1383 1.27984 14.5188 1.74967 14.2993 2.61229C14.1262 3.2926 13.9123 5.68124 18.2118 8.39875C22.5114 5.68124 22.2974 3.2926 22.1244 2.61229C21.9048 1.74967 21.2853 1.27984 20.7886 1.26292C19.25 1.20654 18.8053 2.38864 18.7997 2.39992C18.7123 2.65175 18.476 2.82277 18.2118 2.82277C17.9458 2.82277 17.7095 2.65363 17.6239 2.39992C17.5811 2.28716 17.1588 1.26104 15.7411 1.26104Z" fill="#9E2B25" />
                <path d="M15.8771 5.49515C15.7525 5.49515 15.6278 5.43877 15.546 5.32977C14.893 4.46152 14.6734 3.63649 14.893 2.87536C15.1051 2.14242 15.7432 1.84924 16.0874 1.79098C16.3125 1.7534 16.5283 1.9075 16.5655 2.13678C16.6027 2.36418 16.452 2.57842 16.2288 2.61977C16.2027 2.62541 15.8064 2.70998 15.6911 3.11215C15.5478 3.61018 15.7171 4.17022 16.2083 4.82423C16.3478 5.0084 16.3125 5.27151 16.1283 5.41246C16.052 5.46696 15.9646 5.49515 15.8771 5.49515Z" fill="#9E2B25" />
                <path d="M9.33767 27.4194C4.18977 27.4194 0 23.1872 0 17.9871C0 12.7851 4.18977 8.55469 9.33767 8.55469C11.0698 8.55469 12.7609 9.03768 14.2288 9.95103C14.6195 10.1935 14.7423 10.7122 14.5005 11.1068C14.2605 11.5015 13.747 11.6255 13.3563 11.3812C12.1507 10.6314 10.7609 10.2348 9.33767 10.2348C5.10512 10.2348 1.66326 13.7135 1.66326 17.9871C1.66326 22.2625 5.10698 25.7393 9.33767 25.7393C13.5702 25.7393 17.0121 22.2607 17.0121 17.9871C17.0121 16.6396 16.6642 15.3109 16.0074 14.1495C15.7805 13.7473 15.9181 13.2342 16.3181 13.0031C16.7181 12.7738 17.226 12.9129 17.453 13.3169C18.253 14.7339 18.6772 16.3483 18.6772 17.9889C18.6772 23.1872 14.4874 27.4194 9.33767 27.4194Z" fill="#9E2B25" />
                <path d="M18.9394 29C18.1189 29 17.3059 28.8891 16.5226 28.6711C16.0798 28.547 15.8194 28.0847 15.9422 27.6374C16.065 27.1902 16.5226 26.9271 16.9654 27.0511C17.6054 27.2296 18.2696 27.3198 18.9394 27.3198C23.0175 27.3198 26.3366 23.9671 26.3366 19.8476C26.3366 15.7281 23.0175 12.3754 18.9394 12.3754C14.8612 12.3754 11.5422 15.7281 11.5422 19.8476C11.5422 20.9132 11.7598 21.9431 12.1877 22.9053C12.3757 23.3281 12.1896 23.8262 11.7691 24.016C11.3505 24.2058 10.8575 24.0178 10.6696 23.5931C10.145 22.4129 9.87891 21.1519 9.87891 19.8476C9.87891 14.8016 13.944 10.6953 18.9394 10.6953C23.9347 10.6953 27.9998 14.8016 27.9998 19.8476C27.9998 24.8955 23.9366 29 18.9394 29Z" fill="#9E2B25" />
              </g>
              <defs>
                <clipPath id="clip0_241_17140">
                  <rect width="28" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={{ backgroundImage: `linear-gradient(to right, #570D0C 0%, #570D0C 60%, transparent 40%)` }} className="absolute border-dashed  w-full bottom-[50%]">

          </div>
        </div> : ""}

      </div>
    );
  }

  

  function FamilyElements(props: any) {
    let index = props.index;
    let itemsFamily = props.item;
    let length = props.length;
    let paddingDefault = 24.5;
    let ignore = 49.12;
    if (itemsFamily[0][0].generation === 1) {
      paddingDefault = 36;
      ignore = 72;
      if (itemsFamily[0][0].father === null || itemsFamily[0][0].father === "") {
        ignore += 52;
      }
      if (itemsFamily[itemsFamily.length - 1][itemsFamily[itemsFamily.length - 1].length - 1].father === null || itemsFamily[itemsFamily.length - 1][itemsFamily[itemsFamily.length - 1].length - 1].father === "") {
        ignore += 88;
      }
    } else {
      if (itemsFamily[0][0].father === null || itemsFamily[0][0].father === "") {
        ignore += 40.5;
      }
      if (itemsFamily[itemsFamily.length - 1][itemsFamily[itemsFamily.length - 1].length - 1].father === null || itemsFamily[itemsFamily.length - 1][itemsFamily[itemsFamily.length - 1].length - 1].father === "") {
        ignore += 65.5;
      }
    }
    let middle = Math.round((length - 1) / 2)
    let width = 150 / middle;

    if (index === middle) {
      width = width / 2;
    } else {
      width = width * Math.abs(middle - index);
    }
    let childrents = [];
    itemsFamily.map((item: any) => {
      childrents = childrents.concat(item);
    });
    let name =  "family"  + props.indexLayer + index;
    const [leftView, setLeftView] = React.useState(0);
    const [left, setLeft] = React.useState(true);
    if (Object.keys(dataPositionTmp).length === 0) {
      dataPositionTmp = {...positionData};
    } else {
      let name =  "family"  + props.indexLayer + index;
      let data = dataPositionTmp[name];
      if (!dataPositionTmp[data.parent]) {
        let dataParent = {
          width: 160 - width,
        };
        dataPositionTmp = {...dataPositionTmp, [data.parent]: dataParent};
    }
      data.width = width;
      dataPositionTmp = {...dataPositionTmp, [name]: data};
    }
    useLayoutEffect(() => {
      if (itemsFamily[0][0].generation !== 0) {
        for (let i = 0; i < childrents.length; i++) {
          if (childrents[i].totalChildrent && childrents[i].gender === "male") {
            let leftView = 42+ document.getElementById('persion' + childrents[i].index).parentElement.offsetLeft +            document.getElementById(props.indexLayer + 'family' + index).offsetLeft + document.getElementById('persion' + childrents[i].index).offsetLeft + document.getElementById('persion' + childrents[i].index).offsetWidth / 2;
            if (childrents[i].totalHusband === 2) {
              leftView = leftView - 42;
            }
            dataPositionTmp = {...dataPositionTmp, [childrents[i].code]: {width: dataPositionTmp[childrents[i].code].width, left: leftView}};
          }
        }
      }
      if (itemsFamily[0][0].generation !== 0 && itemsFamily[0][0].generation !== 1) {
        let leftView = document.getElementById(props.indexLayer + 'family' + index).offsetLeft + document.getElementById('family' + props.indexLayer + index + 'line1').offsetLeft + document.getElementById('family' + props.indexLayer + index + 'line2').offsetLeft + width / 2;
        let name =  "family"  + props.indexLayer + index;
        let data = dataPositionTmp[name];
        setLeftView(Math.abs(leftView - dataPositionTmp[data.parent].left));
        if (leftView - dataPositionTmp[data.parent].left > 0) {
          setLeft(false);
        }
        data.width = width;
        dataPositionTmp = {...dataPositionTmp, [name]: data};
      }
    }, []);
    return (
      <div id={`${props.indexLayer}family${index}`} className="relative flex items-center gap-[30px]">
      
        {itemsFamily[0][0].generation !== 0 ? <div id={`family${props.indexLayer}${index}line1`} style={{ backgroundImage: `linear-gradient(to right, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 0%, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 60%, transparent 40%)`, width: `calc(100% - ${ignore}px)`, marginLeft: `${paddingDefault}px` }} className="absolute border-dashed w-full bottom-[120%] ">
          {itemsFamily[0][0].generation === 1 ? '' : <div id={`family${props.indexLayer}${index}line2`} style={{ backgroundImage: `linear-gradient(to right, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 0%, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 60%, transparent 40%)`, width: `${width}px`, left: `calc(50% - ${width / 2}px)`, marginBottom: `${width / 2}px` }} className={`absolute border-dashed rotate-90 bottom-[100%] `}>

          </div>}
          {left?<div id={`family${props.indexLayer}${index}line3`} style={{marginLeft: `50%`, backgroundImage: `linear-gradient(to right, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 0%, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 60%, transparent 40%)`, width: `${leftView}px`, marginBottom: `${width + 5}px` }} className={`absolute border-dashed bottom-[-100%] `}>

</div>:<div id={`family${props.indexLayer}${index}line3`} style={{marginRight: `50%`, right: "0", backgroundImage: `linear-gradient(to right, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 0%, ${dataPositionTmp[name].isActive ? "#FF0300" : "#570D0C"} 60%, transparent 40%)`, width: `${leftView + 5}px`, marginBottom: `${width + 5}px` }} className={`absolute border-dashed bottom-[-100%] `}>

</div>}
          {/* {itemsFamily[0][0].generation === 1?'':<div style={{ backgroundImage: `linear-gradient(to right, #570D0C 0%, #570D0C 60%, transparent 40%)`, width: `${20000}px`, marginBottom: `${width}px` }} className={`absolute border-dashed  bottom-[100%] `}>
        
        </div>} */}
        </div> : ""}
        {itemsFamily.map((item: any) => {
          return item[0].generation !== 0 ? getCoupleElements(item) : getCoupleElementsSpecial(item);
        })}
      </div>
    );
  }

  function getLayerElements(itemsLayer: any, indexLayer: any) {
    const length = itemsLayer.length;
    return (
      <div className="relative layer flex w-full items-center justify-center gap-[50px]">
        {/* <div style={{ backgroundImage: `linear-gradient(to right, #570D0C 0%, #570D0C 60%, transparent 40%)`, width: `5855px` }} className={`absolute border-dashed left-0 bottom-[100%] `}> */}

        {/* </div> */}
        {itemsLayer.map((item: any, index: any) => {
          return <FamilyElements item={item} index={index} indexLayer={indexLayer} length={length}></FamilyElements>
        })}
      </div>
    );
  }

  function getContainerElements(itemsContainer: any) {
    return (
      <div className="flex flex-col items-center gap-[215px] mt-[50px]">
        {itemsContainer.map((item: any, index: any) => {
          return getLayerElements(item, index);
        })}
      </div>
    );
  }


  function PersonItem(props: any) {
    const [openPop, setOpenPop] = React.useState(false);
    let paddingDefault = 24.5;
    let ignore = 49.12;
    if (props.item.generation === 1) {
      paddingDefault = 36;
      ignore = 72;
    }
    const [widthConnect, setWidthConnect] = React.useState(0);
    const [marginLeftConnect, setMarginLeftConnect] = React.useState('');
    const [marginTopConnect, setMarginTopConnect] = React.useState('');

    useEffect(() => {
      let widthConnectTmp = dataPositionTmp[props.item.code]?dataPositionTmp[props.item.code].width:0;
      let marginLeftConnectTmp = -(widthConnectTmp/2 - 25) + 33 + "px";
      if (props.item.totalHusband === 2) {
        marginLeftConnectTmp = -(widthConnectTmp/2 - 25) + "px";
      }
      let marginTopConnectTmp = 25+ widthConnectTmp/2 + "px";
      if (props.item.generation === 1) {
        widthConnectTmp -=  12;
        marginLeftConnectTmp = -(widthConnectTmp/2 - 36) + 46 + "px";
        marginTopConnectTmp = 36+ widthConnectTmp/2 + "px";
        if (props.item.totalHusband === 2) {
          marginLeftConnectTmp = -(widthConnectTmp/2 - 36) + "px";
        }
      }
      setWidthConnect(widthConnectTmp);
      setMarginLeftConnect(marginLeftConnectTmp);
      setMarginTopConnect(marginTopConnectTmp);
    }, []);
    return (
      <>
        {props.item.totalChildrent && props.item.gender === "male" ? <div style={{ backgroundImage: `linear-gradient(to right, ${props.item.isActive ? "#FF0300" : "#570D0C"} 0%, ${props.item.isActive ? "#FF0300" : "#570D0C"} 60%, transparent 40%)`, width: `calc(100% - ${ignore}px)`, marginLeft: `${paddingDefault}px`, boxShadow: props.item.isActive ? " 0px 0px 3px 0px #F90" : "" }} className="absolute border-dashed w-full top-[121%] ">

        </div> : ''}
        <div id={`persion${props.item.index}`} className="relative">

          <div onMouseLeave={() => { setOpenPop(false) }} onMouseEnter={() => { setOpenPop(true) }} onClick={() => { setActive(props.item.gender === "female" && props.item.husband != null ? props.item.husband : props.item.code) }} style={{ backgroundImage: props.item.isActive ? "url('assets/images/template/item-active-bg.png')" : "url('assets/images/template/item-bg.png')", backgroundSize: "cover" }} className={`cursor-pointer	 flex flex-col ${props.item.generation === 1 ? "w-[72px] h-[170px]" : "w-[49.129px] h-[116px]"} items-center pt-[10px]`}>
            <div className={`w-full text-center text-[#fff] ${props.item.generation === 1 ? "text-[10px]" : "text-[8px]"} font-normal`}>{props.item.gender === "male" ? "Ông" : "Bà"}</div>
            <div className={`w-full text-center pt-[5px] pb-[10px] text-[#fff] ${props.item.generation === 1 ? "text-[14px]" : "text-[10px]"} font-normal italic`}></div>
            {props.item.fullName !== null ? props.item.fullName.split(" ").map((item: any) => {
              return (
                <div className={`w-full text-center text-[#fff] ${props.item.generation === 1 ? "text-[14px] pb-[4px]" : "text-[10px] pb-[2px]"} font-semibold uppercase`}>{item}</div>
              );
            }) : ""}
          </div>
          {
            props.item.father !== null && props.item.father !== "" && props.item.father !== "-100" ? <>        <div style={{ backgroundImage: `linear-gradient(to right, ${props.item.isActive ? "#FF0300" : "#570D0C"} 0%, ${props.item.isActive ? "#FF0300" : "#570D0C"} 60%, transparent 40%)`, boxShadow: props.item.isActive ? " 0px 0px 3px 0px #F90" : "" }} className="absolute border-dashed rotate-90 w-full bottom-[100%] z-[-1]">

            </div>
              <div className="absolute w-full bottom-[100%] z-[-1] flex items-center justify-center top-[-5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z" fill={props.item.isActive ? "#FF0300" : "#570D0C"} />
                </svg>
              </div></> : ""
          }
          {
            props.item.totalChildrent !== 0 ? <><div style={{ backgroundImage: `linear-gradient(to right, ${props.item.isActive ? "#FF0300" : "#570D0C"} 0%, #570D0C 60%, transparent 40%)`, boxShadow: props.item.isActive ? " 0px 0px 3px 0px #F90" : "" }} className="absolute border-dashed rotate-90 w-full top-[100%] z-[-1]">

            </div>
            </> : ""
          }
          {props.item.totalChildrent > 0?<><div style={{ backgroundImage: `linear-gradient(to right, ${props.item.isActive ? "#FF0300" : "#570D0C"} 0%, #570D0C 60%, transparent 40%)`, marginTop: marginTopConnect , marginLeft: marginLeftConnect, width: widthConnect, boxShadow: props.item.isActive ? " 0px 0px 3px 0px #F90" : "" }} className="absolute border-dashed rotate-90 top-[100%] z-[-1]">

</div></>:''}
          {openPop ? <div className="px-[15px] pt-[25px]  absolute left-[120%] bottom-[80%] z-50 w-[350px] h-[159px]" style={{ backgroundImage: "url('assets/images/template/item-tooltip.png')", backgroundSize: "cover" }}>
            <div className="w-full text-center text-[#9E2B25] text-[12px] font-normal">{props.item.gender === "male" ? "Ông" : "Bà"}</div>
            <div className="w-full flex items-center gap-[5px] justify-center mb-10">
              <p className="text-[#9E2B25] text-[16px] font-bold ">{props.item.fullName}</p>
            </div>
            <div className="w-full text-center text-[#9E2B25] text-[12px] font-normal">Sinh ngày: {props.item.dateOfBirth}</div>
            <div className="w-full text-center text-[#9E2B25] text-[12px] font-normal">Tổng con cháu: {props.item.totalChildrent}</div>
            <div className="w-full flex items-center gap-[23px] justify-center">
              <p className="text-[#9E2B25] text-[12px] font-normal">Con trai: {props.item.totalMale} người</p>
              <p className="text-[#9E2B25] text-[12px] font-normal ">Con gái: {props.item.totalFemale} người</p>
            </div>
          </div> : ""}
        </div></>

    );
  }

  function PersonItemSpecial(props: any) {
    const [openPop, setOpenPop] = React.useState(false);

    return (
      <div className="relative">

        <div onMouseLeave={() => { setOpenPop(false) }} onMouseEnter={() => { setOpenPop(true) }} onClick={() => { setActive(props.item.gender === "female" && props.item.husband != null ? props.item.husband : props.item.code) }} style={{ backgroundImage: props.item.isActive ? "url('assets/images/template/item-active-special-bg.png')" : "url('assets/images/template/item-special-bg.png')", backgroundSize: "cover" }} className={`cursor-pointer	 flex w-[300px] h-[78px] items-center justify-center`}>
          <div className="w-full">
            <div className="w-full flex items-center text-[#fff] gap-[5px] justify-center ">
              <p className="text-[10px] font-normal italic">{props.item.gender === "male" ? "Cụ ông" : "Cụ bà"}</p>
              <p className="text-[16px] font-bold ">{props.item.fullName}</p>
            </div>
          </div>
        </div>
        {
          props.item.father !== null && props.item.father !== "" && props.item.father !== "-100" ? <>        <div style={{ backgroundImage: `linear-gradient(to right, ${props.item.isActive ? "#FF0300" : "#570D0C"} 0%, #570D0C 60%, transparent 40%)`, boxShadow: props.item.isActive ? " 0px 0px 3px 0px #F90" : "" }} className="absolute border-dashed rotate-90 w-full bottom-[100%] z-[-1]">

          </div>
            <div className="absolute w-full bottom-[100%] z-[-1] flex items-center justify-center top-[-5px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z" fill={props.item.isActive ? "#FF0300" : "#570D0C"} />
              </svg>
            </div></> : ""
        }
        {openPop ? <div className="px-[15px] pt-[25px]  absolute left-[120%] bottom-[80%] z-50 w-[350px] h-[159px]" style={{ backgroundImage: "url('assets/images/template/item-tooltip.png')", backgroundSize: "cover" }}>
          <div className="w-full text-center text-[#9E2B25] text-[12px] font-normal">{props.item.gender === "male" ? "Ông" : "Bà"}</div>
          <div className="w-full flex items-center gap-[5px] justify-center mb-10">
            <p className="text-[#9E2B25] text-[16px] font-bold ">{props.item.fullName}</p>
          </div>
          <div className="w-full text-center text-[#9E2B25] text-[12px] font-normal">Sinh ngày: {props.item.dateOfBirth}</div>
          <div className="w-full text-center text-[#9E2B25] text-[12px] font-normal">Tổng con cháu: {props.item.totalChildrent}</div>
          <div className="w-full flex items-center gap-[23px] justify-center">
            <p className="text-[#9E2B25] text-[12px] font-normal">Con trai: {props.item.totalMale} người</p>
            <p className="text-[#9E2B25] text-[12px] font-normal ">Con gái: {props.item.totalFemale} người</p>
          </div>
        </div> : ""}
      </div>
    );
  }

  function compareIds() {
    let result = true;
    for (var i = 0; i < ids.length; i++) {
        if (props.ids[i] === ids[i]) {
          result  = false;
        }
    }
    return result;
  }

  useEffect(() => {
    console.log(props.ids);
    let totalItems = data.length;
    data.forEach((item1) => {
      let currentCode = item1.code;
      if (item1.gender === "female") {
        let roots = data.filter((e) => e.code === item1.husband)[0];
        if (roots !== undefined) {
          currentCode = roots.code;
        } else {
          item1.totalChildrent = 0;
          item1.totalMale = 0;
          item1.totalFemale = 0;
          return;
        }
      }
      let tmpChildrent = getAllChildrenId(currentCode);
      let ids = [];
      let totalMale = 0;
      let totalFemale = 0;
      tmpChildrent.forEach((item) => {
        if (!ids.includes(item.code)) {
          ids.push(item.code);
          if (item.gender === "male") {
            totalMale++;
          } else {
            totalFemale++;
          }
        }
      });
      item1.totalChildrent = ids.length > 0 ? ids.length - 1 : ids.length;
      item1.totalMale = totalMale;
      item1.totalFemale = totalFemale > 0 ? totalFemale - 1 : totalFemale;
      item1.totalHusband = data.filter((e) => e.husband === item1.code).length;
    });
    let layersTmp = [];
    const childrensData = getChildren("-100");
    let idsActive = [idActive];
    if (props.ids && props.ids.length > 0 && ids.length !== props.ids.length && compareIds()) {
      setIds(props.ids);
      idsActive = props.ids;
      data.forEach((item) => {
        if (idsActive.includes(item.code)) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    } else {
      if (idActive != "-1") {
        let childrens = getAllChildrenId(idActive).concat(getAllParentId(idActive));
        // let childrens = getAllChildrenId(idActive);
        childrens.forEach((item) => {
          idsActive.push(item.code);
        });
        data.forEach((item) => { 
          if (idsActive.includes(item.code)) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
        });
      }
    }
    layersTmp = [[childrensData.children]];
    totalItems -= childrensData.count;

    let index = 0;
    let dataPositon = {};
    do {
      let layerDataIndex = [];
      layersTmp[index].forEach((family) => {
        family.forEach((item) => {
          if (item.length > 0) {
            const childrensData = getChildren(item[0].code);
            if (childrensData.count > 0) {
              totalItems -= childrensData.count;
              let name =  "family" +  (index + 1)  + ""+ layerDataIndex.length;
              let data = {
                parent: item[0].code,
                isActive: item[0].isActive,
                width: 0,
              }
              layerDataIndex.push(childrensData.children);
              dataPositon[name] = data;
            }
          }
        });
      });


      if (layerDataIndex.length > 0) {
        index++;
        layersTmp.push(layerDataIndex);
      }
    }
    while (totalItems > 0);
    dataPositionTmp = {...dataPositon};
    setPositionData(dataPositon);
    setLayers(layersTmp);
  }, [idActive, data, props.ids]);

  const detail = useCallback(() => {
    if (idActive != "-1") {
      let dataTmp = [];
      // let childrens = getAllChildrenId(idActive).concat(getAllParentId(idActive));
      let childrens = getAllChildrenId(idActive);
      let idsActive = [];
      childrens.forEach((item) => {
        if (!idsActive.includes(item.code)) {
          dataTmp.push(item);
          idsActive.push(item.code);
        }
      });
      data.forEach((item) => {
        if (item.code === idActive) {
          let itemTMp = { ...item };
          itemTMp.father = '-100';
          dataTmp.push(item);
        }
      });
      setData(dataTmp);
    }
  }, [idActive, props.ids]);

  useEffect(() => {
    setContainerItems(getContainerElements(layers));
  }, [layers])


  useEffect(() => {
    // console.log(document.getElementById("family1").offsetTop)
    // console.log(document.getElementById("family1").offsetLeft)
  });

  const [size, setSize] = useState([0, 0]);
  const [scale, setScale] = useState(1 * (window.innerWidth / 1920));
  const [mapX, setMapX] = useState(-5090 - (Math.abs(window.innerWidth - 1920) / 2));
  const [valueMap, setValueMap] = useState({
    scale: scale > 0.5 ? scale : 0.5,
    translation: { x: mapX * scale + (scale == 0.5 ? Math.abs(window.innerWidth) * (scale / 2) : Math.abs(window.innerWidth - 1920) * (scale / 2)), y: -20 },
  });
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      let scaleTmp = 1 * (window.innerWidth / 1920);
      scaleTmp = scaleTmp > 0.5 ? scaleTmp : 0.5;
      let mapXTmp = -5090 - (Math.abs(window.innerWidth - 1920) / 2);
      setMapX(mapXTmp);
      setScale(scaleTmp);

      setValueMap({
        scale: scaleTmp,
        translation: { x: (mapXTmp * scaleTmp + (scaleTmp == 0.5 ? Math.abs(window.innerWidth) * (scaleTmp / 2) : Math.abs(window.innerWidth - 1920) * (scaleTmp / 2))), y: -20 },
      })
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    // <>
    //   {containerItems}
    // </>
    <>
      <MapInteractionCSS
        showControls
        defaultValue={valueMap}
        value={valueMap}
        onChange={(value) => { setValueMap(value) }}
        minScale={0.5}
        maxScale={5}
        translationBounds={{
          xMax: 400,
          yMax: 200
        }}
      >
        {containerItems}
      </MapInteractionCSS>
    </>
    // <TransformWrapper
    //   initialScale={1}
    //   initialPositionX={200}
    //   initialPositionY={100}
    //   ref={transformComponentRef}
    // >
    //   {(utils) => (
    //     <React.Fragment>
    //       <TransformComponent>
    //         {containerItems}
    //       </TransformComponent>
    //     </React.Fragment>
    //   )}
    // </TransformWrapper>
  );
};

export default TemplatePage;
